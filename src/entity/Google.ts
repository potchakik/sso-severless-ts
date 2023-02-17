import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Google {
  //@PrimaryGeneratedColumn()
  //id: number

  @PrimaryGeneratedColumn()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
