import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(22222)
    return this.appService.getHello();
  }
}


@Controller('index')
export class AppController1 {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello1(): string {
    console.log(11111)
    return this.appService.getHello1();
  }
}
