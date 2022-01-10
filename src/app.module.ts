import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-ioredis'
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'ormconfig';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
