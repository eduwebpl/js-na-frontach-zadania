import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListsController } from './shopping-lists.controller';
import { ShoppingListsService } from './shopping-lists.service';

describe('ShoppingListsController', () => {
  let controller: ShoppingListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingListsController],
      providers: [ShoppingListsService],
    }).compile();

    controller = module.get<ShoppingListsController>(ShoppingListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
