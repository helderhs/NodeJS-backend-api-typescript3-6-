import { Router } from "express";
import { SessionController } from "../controllers/SessionController";
import { celebrate, Joi, Segments } from "celebrate";

//import isAuthenticated from "@shared/http/middlewares/isAuthentiated";

const usersRoutter = Router();
const sessionController = new SessionController();

usersRoutter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().messages({
        "string.base": `"a" should be a type of 'text'`,
        "string.empty": `"a" cannot be an empty field`,
        "string.min": `"a" should have a minimum length of {#limit}`,
        "any.required": `"a" is a required field`,
      }),
      password: Joi.string().required().messages({
        "string.base": `"a" should be a type of 'text'`,
        "string.empty": `"a" cannot be an empty field`,
        "string.min": `"a" should have a minimum length of {#limit}`,
        "any.required": `"a" is a requdasdired field`,
      }),
    },
  }),
  sessionController.create
);

export default usersRoutter;
