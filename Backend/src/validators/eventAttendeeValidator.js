import joi from "joi";

export const eventAttendeesValidator = (eventAttendee) => {
  const eventAttendeesValidatorSchema = joi.object({
    EventID: joi.string().required(),
    AttendeeID: joi.string().required(),
  });

  return eventAttendeesValidatorSchema.validate(eventAttendee);
};

export const eventAttendeesUpdateValidator = (eventAttendee) => {
  const eventAttendeesUpdateValidatorSchema = joi.object({
    EventID: joi.string().required(),
  });

  return eventAttendeesUpdateValidatorSchema.validate(eventAttendee);
};