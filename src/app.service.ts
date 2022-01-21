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
      arr.push({name: String(Math.random())})
    }
    console.log('start inserting')
    await this.employeeRepo.save(arr)
    console.log('end inserting')

    // const key = await this.cacheManager.set("my-key", 100 , {ttl: 0})
    // return key

  }
}
