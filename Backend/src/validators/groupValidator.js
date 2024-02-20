import joi from "joi";

export const groupValidator = (group) => {
  const groupValidatorSchema = joi.object({
    GroupID: joi.string().max(255).required(),
    GroupName: joi.string().max(255).required(),
    Description: joi.string().max(255).required(),
    CreatedDate: joi.date().iso().required(),
  });
  return groupValidatorSchema.validate(group);
};

export const groupUpdateValidator = (group) => {
  const groupSchema = joi.object({
    GroupName: joi.string().min(1).required(),
    Description: joi.string().min(1).required(),
    CreatedDate: joi.string().min(1).required(),
  });

  return groupSchema.validate(group)
};