import { Request, Response } from "express";
import { Tarefa } from "../typeorm/entities/Tarefa";
import TarefasRepository from "../typeorm/repositories/TarefasRepository";

interface IRequest {
  tarefa: string;
  id_usuario: number;
}

class CreateTarfaService {
  public async execute({ tarefa, id_usuario }: IRequest): Promise<Tarefa> {
    const tarefaRepository = new TarefasRepository();

    const novaTarefa = tarefaRepository.Repository.create({
      tarefa,
      id_usuario,
    });

    await tarefaRepository.Repository.save(novaTarefa);

    return novaTarefa;
  }
}

export default CreateTarfaService;
