import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../employee/employe.entity";


@Entity()
export class Meeting {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    zoomUrl : string;

    @ManyToMany(() => Employee, employee => employee.meetings)
    attendees: Employee[];
}