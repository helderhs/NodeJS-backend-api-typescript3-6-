import AppError from "../../../shared/errors/AppError";
import { Tarefa } from "../typeorm/entities/Tarefa";
import TarefasRepository from "../typeorm/repositories/TarefasRepository";

interface IRequest {
  id: string;
}

class ShowTarefaService {
  public async execute({ id }: IRequest): Promise<Tarefa> {
    //public async execute(data: IRequest) {

    const tarefaRepository = new TarefasRepository();
    const tarefa = await tarefaRepository.findById(id);
    if (!tarefa) {
      throw new AppError("Tarefa não encontrado.");
    }
    return tarefa;
  }
}

export default ShowTarefaService;
