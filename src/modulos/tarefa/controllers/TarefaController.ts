import { Request, Response } from "express";
import CreateTarefaService from "../services/CreateTarefaService";
import ListTarefasService from "../services/ListTarefasService";
import ShowTarefaService from "../services/ShowTarefaService";
import DeleteTarefaService from "../services/DeleteTarefaService";
import UpdateTarefaService from "../services/UpdateTarefaService";

export class TarefaController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { tarefa } = req.body;
    const id_usuario = req.id_usuario;
    //console.log(id_usuario);
    const createTarefaService = new CreateTarefaService();
    const user = await createTarefaService.execute({
      tarefa,
      id_usuario,
    });

    return res.status(201).json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { tarefa } = request.body;
    const { id } = request.params;

    const updateTarefaService = new UpdateTarefaService();
    const _tarefa = await updateTarefaService.execute({
      id,
      tarefa,
    });

    return response.json(_tarefa);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTarefaService = new ShowTarefaService();

    const tarefa = await showTarefaService.execute({ id });
    return response.json(tarefa);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listTarefasService = new ListTarefasService();
    const users = await listTarefasService.execute();
    return res.status(201).json(users);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTarefaService = new DeleteTarefaService();

    await deleteTarefaService.execute({ id });

    return response.json([]);
  }
}
