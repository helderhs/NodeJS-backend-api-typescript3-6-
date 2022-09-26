import AppError from "../../../shared/errors/AppError";
import { Tarefa } from "../typeorm/entities/Tarefa";
import TarefasRepository from "../typeorm/repositories/TarefasRepository";

interface IRequest {
  id: string;
  tarefa: string;
}
class UpdateTarefaService {
  public async execute({ id, tarefa }: IRequest): Promise<Tarefa> {
    //public async execute(data: IRequest) {
    const tarefaRepository = new TarefasRepository();
    const tarefaUpdate = await tarefaRepository.findById(id);

    if (!tarefaUpdate) {
      throw new AppError("Tarefa não encontrada.");
    }

    tarefaUpdate.tarefa = tarefa;

    await tarefaRepository.Repository.save(tarefaUpdate);

    return tarefaUpdate;
  }
}

export default UpdateTarefaService;
