import { Module } from '@nestjs/common';
import { CircleController } from './controller/circle/circle';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircleService } from './service/circle/circle';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'haichao6909@',
      database: 'campus',
      entities: ["dist/entity/**/*.js"],
      synchronize: true,
      "cli": {
        "entitiesDir": "dist/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
      }
    }),
  ],
  controllers: [CircleController],
  providers: [CircleService],
})
export class AppModule {}
