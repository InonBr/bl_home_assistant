import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Company } from "./CompanyEntity";

@Entity({ name: "order" })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  orderId: string = uuidv4();

  @Column({ nullable: false })
  employId: string = uuidv4();

  @Column({ nullable: false })
  item!: string;

  @CreateDateColumn({ nullable: false })
  orderDate: Date = new Date();

  @ManyToOne(() => Company, (company) => company.orders, { cascade: true })
  company!: Company;
}
