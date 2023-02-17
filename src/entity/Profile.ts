import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
} from "typeorm";
import { Google } from "./Google";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Google)
  @JoinColumn()
  googleEmail: Generator;

  @Column()
  theta_id: number;
}
