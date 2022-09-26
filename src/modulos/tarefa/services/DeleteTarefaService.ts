import AppError from "../../../shared/errors/AppError";
import TarefasRepository from "../typeorm/repositories/TarefasRepository";

interface IRequest {
  id: string;
}
class DeleteCustomerService {
  public async execute({ id }: IRequest): Promise<void> {
    const tarefaRepository = new TarefasRepository();
    const tarefa = await tarefaRepository.findById(id);

    if (!tarefa) {
      throw new AppError("Tarefa não encontrado");
    }

    await tarefaRepository.Repository.remove(tarefa);
  }
}

export default DeleteCustomerService;
