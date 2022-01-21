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
    for (let i = 0; i < 1000000; i++) {
      arr.push({
        id: i,
        name: String(Math.random())
      })
    }
    console.log('start inserting')
    await this.employeeRepo.save(arr)
    console.log('end inserting')

    console.log('statrt redis')
    const key = await this.cacheManager.set("milion-arry", arr , {ttl: 0})
    console.log('end redis')
    // return key

  }
}
