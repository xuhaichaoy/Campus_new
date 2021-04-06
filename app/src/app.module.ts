import { Module } from '@nestjs/common';
import { AppController, AppController1 } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AppController1],
  providers: [AppService],
})
export class AppModule {}
