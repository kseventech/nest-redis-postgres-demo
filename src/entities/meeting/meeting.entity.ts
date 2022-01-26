import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../employee/employe.entity";


@Entity()
export class Meeting extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    zoomUrl : string;

    @ManyToMany(() => Employee, employee => employee.meetings)
    attendees: Employee[];
}