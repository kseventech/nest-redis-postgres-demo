import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { getManager, Repository } from 'typeorm';
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
    @InjectRepository(ContactInfo) private contactInfoRepo: Repository<ContactInfo>
  ) {}

  async getHello() {
    const arr = []
    for (let i = 0; i < 1000; i++) {
      arr.push(this.employeeRepo.create({name: String(Math.random())}))
    }
    console.log('start inserting')
    await this.employeeRepo.save(arr)
    console.log('end inserting')

    console.log('start find')
    const found = await this.employeeRepo.find()
    console.log('end find')

    console.log('insert into redis')
    const key = await this.cacheManager.set("test-arr", found , {ttl: 0})
    console.log('done insert into redis')

    return key

  }
}
