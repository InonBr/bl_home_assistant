import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Order } from "./OrderEntity";

@Entity({ name: "company" })
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  companyId: string = uuidv4();

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  phone!: string;

  @Column({ nullable: false })
  address!: string;

  @CreateDateColumn({ nullable: false })
  creationDate: Date = new Date();

  @OneToMany(() => Order, (order) => order.company)
  orders!: Order[];
}
