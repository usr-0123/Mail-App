import Joi from "joi";

export const eventValidator = (event) => {
  const schema = Joi.object({
    EventID: Joi.string().max(255).required(),
    EventName: Joi.string().max(255).required(),
    Description: Joi.string().max(1000),
    EventDate: Joi.date().iso().required(),
    Location: Joi.string().max(255),
    EventPoster: Joi.string().uri().max(1000),
  });
  return schema.validate(event);
};
