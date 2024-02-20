import { getEventAttendeesServices } from "../services/eventAttendeeService.js";
import { sendNotFound, sendServerError, paginate, orderData, checkIfValuesIsEmptyNullUndefined, sendCreated } from "../helper/helperFunctions.js";
import { addEventAttendeesService, deleteEventAttendeeService, getEventAttendeeByIdService, updateEventAttendeesService } from '../services/eventAttendeeService.js';
import { eventAttendeesValidator, eventAttendeesUpdateValidator } from "../validators/eventAttendeeValidator.js";

// Fetch all the attendees
export const getEventAttendees = async (req, res) => {
    try {
        const data = await getEventAttendeesServices(); // Update to use event attendees service
        if (data.length === 0) {
            sendNotFound(res, 'No EventAttendees found');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(data, req.query.order));
                } else {
                    res.status(200).json(data);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(data, req.query.order), req, res);
                } else {
                    paginate(data, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error);
    }
};

// Add a new attendee
export const createEventAttendees = async (req, res) => {
    const { EventID, AttendeeID } = req.body;
    
    // Validate input parameters (if needed)
    
    const { error } = eventAttendeesValidator(req.body); // Assuming you have a validator for event attendees
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        const newEventAttendee = {
            EventID,
            AttendeeID,
        };

        try {
            let response = await addEventAttendeesService(newEventAttendee); // Update to use the service function for event attendees
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                return res.status(201).json({ message: "Event attendee created successfully", eventAttendee: newEventAttendee });
            }
        } catch (err) {
            console.error("Error creating event attendee:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
};

// Fetch an attendee by id
export const getEventAttendeeById = async (req, res) => {
    try {
        const EventAttendeeID = req.params.EventAttendeeID;
        const eventAttendee = await getEventAttendeeByIdService(EventAttendeeID);

        if (eventAttendee) {
            return res.status(200).json({ eventAttendee });
        } else {
            return res.status(404).json({ error: 'EventAttendee not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Update eventAttendee
export const updateEventAttendee = async (req, res) => {
    try {
        let AttendeeID  = req.params.AttendeeID;

        const attendee = {
            EventID: req.body.EventID
        };
        
        const { error } = eventAttendeesUpdateValidator(attendee);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const eventAttendeeToUpdate = await getEventAttendeeByIdService(AttendeeID, attendee);
if (eventAttendeeToUpdate.rowsAffected == 1){
    res.status(200).send("Details updated successfully");
} else {
    sendNotFound(res, "Event attendee not found")
}
    } catch (error) {
        return sendServerError(res, error.message);
    }
};

// Deleting an attendee
export const deleteEventAttendee = async (req, res) => {
    try {
        const EventAttendeeID = req.params.EventAttendeeID;
        const result = await deleteEventAttendeeService(EventAttendeeID);

        if (result.rowsAffected[0] > 0) {
            return res.status(200).json({ message: 'EventAttendee deleted successfully' });
        } else {
            return res.status(404).json({ error: 'EventAttendee not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};