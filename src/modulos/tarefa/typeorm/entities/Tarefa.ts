import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { User } from "../../../user/typeorm/entities/User";

@Entity("tarefas")
export class Tarefa {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  tarefa: string;

  @Column()
  id_usuario: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.tarefas)
  @JoinColumn({ name: "id_usuario" })
  user: User;
}
