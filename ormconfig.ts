import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host :process.env.DB_HOST,
  database: 'db9',
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
