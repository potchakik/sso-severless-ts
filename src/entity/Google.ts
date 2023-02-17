import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Google {
  //@PrimaryGeneratedColumn()
  //id: number

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
