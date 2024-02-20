import { poolRequest, sql } from "../utilis/dbConnect.js";

// Add new event
export const addEventService = async (event) => {
  try {
    const result = await poolRequest()
      .input("EventID", sql.VarChar, event.EventID)
      .input("EventName", sql.VarChar, event.EventName)
      .input("Description", sql.VarChar, event.Description)
      .input("EventDate", sql.DateTime, event.EventDate)
      .input("Location", sql.VarChar, event.Location)
      .input("EventPoster", sql.VarChar, event.EventPoster)
      .query(`INSERT INTO Event (EventID, EventName, Description, EventDate, Location, EventPoster) 
              VALUES (@EventID, @EventName, @Description, @EventDate, @Location, @EventPoster)`);
    return result;
  } catch (error) {
    return error;
  }
};

// Fetch all events
export const getAllEventsService = async () => {
  try {
    const result = await poolRequest().query(`SELECT * FROM Event`);
    return result;
  } catch (error) {
    return error;
  }
};

// Fetch one event by ID
export const getOneEventService = async (EventID) => {
  try {
    const result = await poolRequest()
      .input("EventID", sql.Int, EventID)
      .query(`SELECT * FROM Event WHERE EventID = @EventID`);
    return result;
  } catch (error) {
    return error;
  }
};

// Update event
export const updateEventService = async (EventID, event) => {
  try {
    const result = await poolRequest()
      .input("EventID", sql.Int, EventID)
      .input("EventName", sql.VarChar, event.EventName)
      .input("Description", sql.VarChar, event.Description)
      .input("EventDate", sql.DateTime, event.EventDate)
      .input("Location", sql.VarChar, event.Location)
      .input("EventPoster", sql.VarChar, event.EventPoster).query(`UPDATE Event 
              SET EventName = @EventName, 
                  Description = @Description, 
                  EventDate = @EventDate, 
                  Location = @Location, 
                  EventPoster = @EventPoster 
              WHERE EventID = @EventID`);
    return result;
  } catch (error) {
    return error;
  }
};

// Delete event
export const deleteEventService = async (EventID) => {
  try {
    const result = await poolRequest()
      .input("EventID", sql.Int, EventID)
      .query(`DELETE FROM Event WHERE EventID = @EventID`);
    return result;
  } catch (error) {
    return error;
  }
};
