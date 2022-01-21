import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-ioredis'
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'ormconfig';
import dotenv from 'dotenv'
import { Employee } from './entities/employee/employe.entity';
import { Task } from './entities/task/task.entity';
import { ContactInfo } from './entities/contact/contact.entity';
import { Meeting } from './entities/meeting/meeting.entity';

dotenv.config()


@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: 6379,
    }),
    TypeOrmModule.forFeature([Employee,Task,ContactInfo,Meeting])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
