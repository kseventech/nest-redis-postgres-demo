import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-ioredis'
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'ormconfig';
import { CatModule } from './entities/cat/cat.module';
import { UserModule } from './entities/user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    CatModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
