import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host :'database-2.c1ymnux6g6xr.us-east-1.rds.amazonaws.com',
  database: 'db555',
  keepConnectionAlive: true,
  port: 3306,
  username: 'user_1',
  password: 'testtest1',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  // type: 'postgres',
  // host: 'localhost',
  // database: 'typeorm-demo-db',
  // port: 5432,
  // username: 'user_1',
  // password: 'test1',
  // entities: ['dist/src/**/*.entity.js'],
  // synchronize: false,
  // migrations: ['dist/src/db/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/db/migrations',
  // },
};
export default typeormConfig;
