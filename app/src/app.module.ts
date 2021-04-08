import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
