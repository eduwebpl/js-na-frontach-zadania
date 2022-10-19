import { Model } from 'objection';

export class Product extends Model {
  static tableName = 'products';
  static virtualAttributes = ['price'];

  id: string;
  name: string;
  description?: string;
  quantity: number;
  value: number;
  unit: 'item' | 'kg' | 'l';
  status: 'AWAITING' | 'BOUGHT';

  price(): number {
    return this.value * this.quantity || 0;
  }

  static modifiers = {
    selectAllButTimestamps(query) {
      query.select([
        'id',
        'name',
        'unit',
        'description',
        'quantity',
        'value',
        'status',
      ]);
    },
  };
}
