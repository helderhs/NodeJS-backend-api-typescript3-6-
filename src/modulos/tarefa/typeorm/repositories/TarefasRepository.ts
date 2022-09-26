import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Tarefa } from "../entities/Tarefa";

//export const usersRepository = AppDataSource.getRepository(User);

class TarefasRepository {
  Repository = AppDataSource.getRepository(Tarefa);

  public async findById(id: String): Promise<Tarefa | undefined | null> {
    const tarefa = await this.Repository.findOne({
      where: { id: Number(id) },
    });
    return tarefa;
  }
}

export default TarefasRepository;
