import { Model } from 'objection';
import { Product } from './product.entity';

export class ShoppingList extends Model {
  static tableName = 'shopping_lists';
  id: number;
  name: string;
  description: string;
  product: Product[];

  static relationMappings = {
    products: {
      relation: Model.HasManyRelation,
      modelClass: Product,
      join: {
        from: `${ShoppingList.tableName}.id`,
        to: `${Product.tableName}.listId`,
      },
    },
  };
}
