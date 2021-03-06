import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Employee } from "../employee/employe.entity";


@Entity()
export class ContactInfo extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    email : string;

    @Column()
    employeeId: number

    @OneToOne(() => Employee, employee => employee.contactInfo , {onDelete: 'CASCADE' })
    @JoinColumn()
    employee: Employee

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}