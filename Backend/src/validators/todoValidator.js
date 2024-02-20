import joi from "joi";

export const todoValidator = (todo) => {
  const todoValidatorSchema = joi.object({
    title: joi.string().required(),
    completed: joi.string().required(),
  });
  return todoValidatorSchema.validate(todo);
};
