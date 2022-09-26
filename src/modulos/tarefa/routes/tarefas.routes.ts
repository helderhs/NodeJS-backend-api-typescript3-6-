import { Router } from "express";
import { TarefaController } from "../controllers/TarefaController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "../../../shared/middlewares/isAuthentiated";
import multer from "multer";
import uploadConfig from "../../../config/uploadConfig";
//import isAuthenticated from "@shared/http/middlewares/isAuthentiated";
const upload = multer(uploadConfig);
const tarefaRoutter = Router();
const tarefaController = new TarefaController();

//customersRoutter.use(isAuthenticated);
tarefaRoutter.get("/", isAuthenticated, tarefaController.list);

tarefaRoutter.get(
  "/:id",
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required().messages({
        "any.required": `ID é requerido`,
      }),
    },
  }),
  tarefaController.show
);

tarefaRoutter.post(
  "/",
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      tarefa: Joi.string().required().messages({
        "any.required": `"a" is a required field`,
      }),
    },
  }),
  isAuthenticated,
  tarefaController.create
);

tarefaRoutter.put(
  "/:id",
  upload.single("foto"),
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      tarefa: Joi.string().required().messages({
        "any.required": `Tarefa é quererida`,
      }),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required().messages({
        "any.required": `ID é requerido`,
      }),
    },
  }),
  tarefaController.update
);

tarefaRoutter.delete(
  "/:id",
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required().messages({
        "any.required": `ID é requerido`,
      }),
    },
  }),
  tarefaController.delete
);

export default tarefaRoutter;
