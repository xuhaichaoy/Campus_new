import { Test, TestingModule } from '@nestjs/testing';
import { CircleController } from './controller/circle';
import { CircleService } from './service/circle';

describe('AppController', () => {
  let circleController: CircleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CircleController],
      providers: [CircleService],
    }).compile();

    circleController = app.get<CircleController>(CircleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(circleController.getHello()).toBe('Hello World!');
    });
  });
});
