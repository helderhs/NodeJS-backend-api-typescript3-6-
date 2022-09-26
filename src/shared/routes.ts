import { Router } from "express";
import usersRoutes from "../modulos/user/routes/users.routes";
import tarefaRoutter from "../modulos/tarefa/routes/tarefas.routes";
import sessionsRoutes from "../modulos/user/routes/session.routes";
import { errors } from "celebrate";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello Dev!" });
});

routes.use("/user", usersRoutes);
routes.use("/tarefa", tarefaRoutter);
routes.use("/login", sessionsRoutes);

routes.use(errors());

export default routes;
