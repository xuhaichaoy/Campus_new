import { Controller, Get } from '@nestjs/common';
import { CircleService } from '../../service/circle/circle';

@Controller()
export class CircleController {
  constructor(private readonly circleService: CircleService) {}

  @Get('/')
  getHello(): object {
    return this.circleService.getHello();
  }
  @Get('/index')
  getHello1(): string {
    console.log(22222)
    return this.circleService.getHello1();
  }
}
