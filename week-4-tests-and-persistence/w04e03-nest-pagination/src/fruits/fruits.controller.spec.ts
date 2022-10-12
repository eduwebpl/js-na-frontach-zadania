import { Test, TestingModule } from '@nestjs/testing';
import { FruitsController } from './fruits.controller';

describe('FruitsController', () => {
  let controller: FruitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitsController],
    }).compile();

    controller = module.get<FruitsController>(FruitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
