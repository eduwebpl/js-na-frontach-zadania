import { Injectable } from '@nestjs/common';
import { ShoppingList } from './entities/shopping-list.entity';

@Injectable()
export class ShoppingListsService {
  findAll() {
    return ShoppingList.query().select(['id', 'name', 'description']);
  }

  findOne(id: number) {
    return ShoppingList.query()
      .select(['id', 'name', 'description'])
      .findById(id)
      .withGraphFetched('products(selectAllButTimestamps)')
      .throwIfNotFound();
  }
}
