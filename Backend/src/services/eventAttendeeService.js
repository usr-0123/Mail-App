import { poolRequest, sql } from "../utilis/dbConnect.js";

export const getEventAttendeesServices = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM EventAttendee");
        return result.recordset;
    } catch (error) {
        return error.message;
    }
};

export const addEventAttendeesService = async (eventAttendee) => {
    try {
        const result = await poolRequest()
            .input('EventID', sql.VarChar, eventAttendee.EventID)
            .input('AttendeeID', sql.VarChar, eventAttendee.AttendeeID)
            .query("INSERT INTO EventAttendee (EventID, AttendeeID) VALUES (@EventID, @AttendeeID)");
        return result;
    } catch (error) {
        return error;
    }
};


export const updateEventAttendeesService = async (AttendeeID, attendeeDetails ) => {
  try {
    const result = await poolRequest()
      .input("AttendeeID", sql.VarChar, AttendeeID)
      .input("EventID", sql.VarChar, attendeeDetails.EventID)
      .query(`UPDATE EventAttendee
      SET EventID = @EventID
      WHERE  AttendeeID = @AttendeeID`);
    return result;
  } catch (error) {
    return error;
  }
};


export const deleteEventAttendeeService = async (AttendeeID) => {
    try {
        const result = await poolRequest()
            .input('AttendeeID', sql.VarChar, AttendeeID)

            .query("DELETE FROM EventAttendee WHERE AttendeeID = @AttendeeID");

        return result;
    } catch (error) {
        throw error;
    }
};


export const getEventAttendeeByIdService = async (EventID, AttendeeID) => {
    try {
        const result = await poolRequest()
            .input('EventID', sql.VarChar, EventID)
            .input('AttendeeID', sql.VarChar, AttendeeID)
            .query("SELECT * FROM EventAttendee WHERE EventID = @EventID AND AttendeeID = @AttendeeID");

        // Check if any event attendee is found
        if (result.recordset.length === 0) {
            throw new Error('Event attendee not found');
        }

        // Return the first (and presumably only) event attendee found
        return result.recordset[0];
    } catch (error) {
        throw error;
    }
};