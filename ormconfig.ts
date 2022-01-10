import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host :'database-2.c1ymnux6g6xr.us-east-1.rds.amazonaws.com',
  database: 'db1',
  port: 3306,
  username: 'user_1',
  password: 'testtest1',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};
export default typeormConfig;
