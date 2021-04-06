import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    console.log(22222)
    return this.appService.getHello();
  }
  @Get('/index')
  getHello1(): string {
    console.log(22222)
    return this.appService.getHello1();
  }
}
