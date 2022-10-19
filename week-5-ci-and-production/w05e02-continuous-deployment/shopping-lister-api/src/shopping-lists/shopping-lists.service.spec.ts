import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListsService } from './shopping-lists.service';

describe('ShoppingListsService', () => {
  let service: ShoppingListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingListsService],
    }).compile();

    service = module.get<ShoppingListsService>(ShoppingListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
