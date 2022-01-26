import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ContactInfo } from "../contact/contact.entity";
import { Meeting } from "../meeting/meeting.entity";
import { Task } from "../task/task.entity";


@Entity()
export class Employee extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name : string;

    @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
    @JoinTable()
    meetings: Meeting[];
    
    @OneToOne(() => ContactInfo, ( contactInfo ) => contactInfo.employee)
    contactInfo: ContactInfo
    
    @OneToMany(() => Task, ( tasks ) => tasks.employee)
    tasks : Task[]
    
    @OneToMany(() => Employee, employee => employee.manager)
    directReports: Employee[]
    // self ref table
    @ManyToOne(() => Employee, employee=> employee.directReports, {onDelete: 'SET NULL'})
    manager: Employee

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    // @Column({
    //     type:'text',
    //     unique: true,
    //     nullable: true,
    //     enum: []
    //   })
    //   test!: string;

    // @AfterUpdate()
    // @AfterRemove()
    // @AfterInsert()
    // @BeforeRemove()
    // @BeforeUpdate()
    // @BeforeInsert()
    // hashPassword() {
    //   // this.password = crypto.createHmac('sha256', this.password).digest('hex');
    // }

}