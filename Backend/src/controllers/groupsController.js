import { v4 } from "uuid";
import {  addGroupService,  getAllGroupsService,  getOneGroupService,  updateGroupDetailsService,  deleteGroupService,} from "../services/groupService.js";

import { groupValidator, groupUpdateValidator } from "../validators/groupValidator.js";

import { sendSuccess, sendBadRequest, sendServerError,  sendCreated,  notAuthorized,  sendNotFound,  sendDeleteSuccess } from "../helper/helperFunctions.js";

// Create a new group
export const createGroup = async (req, res) => {
  const { GroupID, GroupName, Description, CreatedDate } = req.body;
  const { error } = groupValidator({ GroupID, GroupName, Description, CreatedDate });
  if (error) {
    return sendBadRequest(res, error.details[0].message);
  } else {
    try {
      const newGroup = { GroupID: v4(), GroupName, Description, CreatedDate };
      const response = await addGroupService(newGroup, res);
      if (response.message) {
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "Group created successfully");
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  }
};

// Fetch all groups
export const getAllGroups = async (req, res) => {
  try {
    const data = await getAllGroupsService();
    if (!data.recordset) {
      return sendNotFound(res, "No groups found");
    }
    return res.status(404).json(data.recordset);
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Fetch one group by group ID
export const getOneGroup = async (req, res) => {
  try {
    const group_id = req.params.group_id;
    const data = await getOneGroupService(group_id);
    if (data.length !== 0) {
      return sendSuccess(res, data[0]);
    } else {
      return sendNotFound(res, "Group not found");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Update group details
export const updateGroupDetails = async (req, res) => {
  try {
    const group_id = req.params.group_id;
    

    const group = {
    GroupName: req.body.GroupName,
    Description: req.body.Description,
    CreatedDate: req.body.CreatedDate,
    };
    

    const { error } = groupUpdateValidator (group);
    // console.log(error);

    if (error) {
      return sendBadRequest(res, error.details[0].message);
    }
    let response = await updateGroupDetailsService (group_id, group);
    console.log(response);
    if (response.rowsAffected === 1) {
      return sendSuccess(res, "Group details updated successfully");
    } else {
      return sendNotFound(res, "Group not found");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Delete a group
export const deleteGroup = async (req, res) => {
  try {
    const group_id = req.params.group_id;
    const response = await deleteGroupService(group_id);
    if (response.rowsAffected == 1) {
      return sendDeleteSuccess(res, "Group deleted successfully");
    } else {
      return sendNotFound(res, "Group not found");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};
