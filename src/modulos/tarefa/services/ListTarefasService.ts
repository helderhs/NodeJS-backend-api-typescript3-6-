import { Tarefa } from "../typeorm/entities/Tarefa";
import TarefasRepository from "../typeorm/repositories/TarefasRepository";

class ListUserService {
  public async execute(): Promise<Tarefa[]> {
    //public async execute(data: IRequest) {
    const uarefaRepository = new TarefasRepository();
    const users = await uarefaRepository.Repository.find();
    return users;
  }
}

export default ListUserService;
