import joi from "joi";

export const postValidator = (post) => {
  const postValidatorSchema = joi.object({
    UserID: joi.string().required(),
    content: joi.string().allow("").default("no content"),
    post_date: joi.date().iso().default(new Date()),
    likes: joi.number().integer().default(0),
    comments: joi.number().integer().default(0),
  });
  return postValidatorSchema.validate(post);
};
