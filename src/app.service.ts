import { CACHE_MANAGER, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { ContactInfo } from './entities/contact/contact.entity';
import { Employee } from './entities/employee/employe.entity';
import { Meeting } from './entities/meeting/meeting.entity';
import { Task } from './entities/task/task.entity';


@Injectable()
export class AppService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(Meeting) private MeetingRepo: Repository<Meeting>,
    @InjectRepository(ContactInfo) private contactInfoRepo: Repository<ContactInfo>,
  ) {}

  async getHello() {
    
    
    throw new InternalServerErrorException();
    
    // const employee = this.employeeRepo.create({name: 'Manager'})
    // await this.employeeRepo.save(employee)

    // const employeeContactInfo = this.contactInfoRepo.create({email: 'manager@email.com'})
    // employeeContactInfo.employee = employee
    // await this.contactInfoRepo.save(employeeContactInfo)

    // const employeeTask1 = this.taskRepo.create({ name: 'Hire people'})
    // const employeeTask2 = this.taskRepo.create({ name: 'Send message to CEO'})

    // employeeTask1.employee = employee
    // employeeTask2.employee = employee

    // await this.taskRepo.save(employeeTask1)
    // await this.taskRepo.save(employeeTask2)


    // return await this.employeeRepo.find()
    // return await this.employeeRepo.findOne("613cbc81-ce34-4b73-81dc-908debc22c92",{relations:["tasks", "contactInfo"]})

    // return await this.contactInfoRepo.findOne({email: 'manager@email.com'})

  }

  async createStrapi(body: any) {
    console.log(body)
  }
}
