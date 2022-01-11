import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './models/cat.entity';


@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepo: Repository<Cat>) {}

  async create() {
    const cat = await this.catRepo.save({
      first_name: 'f_name',
      breed: 'f_breed',
      test: 'f_test',
      age: 1,
    });
    return cat;
  }
}