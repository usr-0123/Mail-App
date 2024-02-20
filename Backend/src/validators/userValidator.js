import joi from "joi";

export const userValidator = (user) => {
  const userValidatorSchema = joi.object({
    Username: joi.string().min(3).required(),
    Password: joi.string().min(4).required(),
    Email: joi.string().email().required(),
    TagName: joi.string().min(1).required(),
    Location: joi.string().min(1).required(),
  });
  return userValidatorSchema.validate(user);
};

export const userLoginValidator = (user) => {
  const userLoginValidatorSchema = joi.object({
    Username: joi.string().required(),
    Password: joi.string().min(4).required(),
  });
  return userLoginValidatorSchema.validate(user);
};

export const userUpdateValidator = (user) => {
  const userSchema = joi.object({
    Username: joi.string().min(3).required(),
    Email: joi.string().email().required(),
    TagName: joi.string().min(1).required(),
    Location: joi.string().min(1).required(),
  });

  return userSchema.validate(user)
};