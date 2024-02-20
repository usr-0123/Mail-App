import {
  addEventService,
  getAllEventsService,
  getOneEventService,
  updateEventService,
  deleteEventService,
} from "../services/eventService.js";
import {
  sendServerError,
  sendCreated,
  sendNotFound,
  sendSuccess,
  sendDeleteSuccess,
  notAuthorized,
} from "../helper/helperFunctions.js";

// Add new event
export const addEvent = async (req, res) => {
  try {
    const { EventID, EventName, Description, EventDate, Location, EventPoster } =
      req.body;
    const response = await addEventService({
      EventID,
      EventName,
      Description,
      EventDate,
      Location,
      EventPoster,
    });
    if (response.message) {
      sendServerError(res, response.message);
    } else {
      sendCreated(res, "Event created successfully");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Fetch all events
export const getAllEvents = async (req, res) => {
  try {
    const data = await getAllEventsService();
    if (!data.recordset) {
      return sendNotFound(res, "No events found");
    }
    return sendSuccess(res, data.recordset);
  } catch (error) {
    sendServerError(res, error);
  }
};

// Fetch one event
export const getOneEvent = async (req, res) => {
  try {
    const { EventID } = req.params;
    const data = await getOneEventService(EventID);
    if (!data.recordset[0]) {
      return sendNotFound(res, "Event not found");
    }
    return sendSuccess(res, data.recordset[0]);
  } catch (error) {
    sendServerError(res, error);
  }
};

// Update event
export const updateEvent = async (req, res) => {
  try {
    const { EventID } = req.params;
    const { EventName, Description, EventDate, Location, EventPoster } =
      req.body;
    const response = await updateEventService(EventID, {
      EventName,
      Description,
      EventDate,
      Location,
      EventPoster,
    });
    if (response.rowsAffected == 1) {
      sendSuccess(res, "Event updated successfully");
    } else {
      sendNotFound(res, "Event not found");
    }
  } catch (error) {
    sendServerError(res, error);
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  try {
    const { EventID } = req.params;
    const response = await deleteEventService(EventID);
    if (response.rowsAffected == 1) {
      sendDeleteSuccess(res, "Event deleted successfully");
    } else {
      sendNotFound(res, "Event not found");
    }
  } catch (error) {
    sendServerError(res, error);
  }
};
