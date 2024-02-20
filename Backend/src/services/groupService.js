import { poolRequest , sql} from "../utilis/dbConnect.js";
import { sendServerError } from "../helper/helperFunctions.js";

// Create a new group
export const addGroupService = async (newGroup, res) => {
  try {
    const result = await poolRequest()
      .input("GroupID", newGroup.GroupID)
      .input("GroupName", newGroup.GroupName)
      .input("Description", newGroup.Description)
      .input("CreatedDate", newGroup.CreatedDate)
      .query(
        "INSERT INTO tbl_Group (GroupID, GroupName, Description, CreatedDate) VALUES (@GroupID, @GroupName, @Description, @CreatedDate)"
      );
    return result;
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Fetch all groups
export const getAllGroupsService = async () => {
  try {
    const result = await poolRequest().query(`SELECT * FROM tbl_Group`);
    return result;
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Fetch one group
export const getOneGroupService = async (group_id) => {
  try {
    const result = await poolRequest()
      .input("GroupID", group_id)
      .query(`SELECT * FROM tbl_Group WHERE GroupID = @GroupID`);
    return result.recordset;
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Update group details
export const updateGroupDetailsService = async (group_id, groupDetails) => {
  try {
    const response = await poolRequest()
      .input("group_id", sql.VarChar, group_id)
      .input("GroupName",sql.VarChar, groupDetails.GroupName)
      .input("Description",sql.VarChar, groupDetails.Description)
      .input("CreatedDate",sql.VarChar, groupDetails.CreatedDate)
      .query(`UPDATE tbl_Group
      SET GroupName=@GroupName,
      Description=@Description,
      CreatedDate=@CreatedDate

      WHERE GroupID=@group_id`);

      // console.log(group_id);
    return response;
  } catch (error) {
    return error;
  }
};

// Delete a group
export const deleteGroupService = async (group_id) => {
  try {
    const response = await poolRequest()
      .input("GroupID", group_id)
      .query("DELETE FROM tbl_Group WHERE GroupID = @GroupID");
    return response;
  } catch (error) {
    sendServerError(res, error.message);
  }
};
