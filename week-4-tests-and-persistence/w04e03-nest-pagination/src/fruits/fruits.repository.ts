import { BaseRepository } from '../database/base.repository';
import { Fruit } from './Fruit';

export class FruitsRepository extends BaseRepository<Fruit> {
  constructor() {
    super([
      {
        id: 1,
        name: 'Banana',
      },
      {
        id: 2,
        name: 'Orange',
      },
      {
        id: 3,
        name: 'Strawberry',
      },
      {
        id: 4,
        name: 'Pear',
      },
      {
        id: 5,
        name: 'Tomato',
      },
      {
        id: 6,
        name: 'Apple',
      },
      {
        id: 9,
        name: 'Cherry',
      },
      {
        id: 10,
        name: 'Pineapple',
      },
      {
        id: 23,
        name: 'Raspberry',
      },
      {
        id: 25,
        name: 'Watermelon',
      },
      {
        id: 26,
        name: 'Lemon',
      },
      {
        id: 27,
        name: 'Mango',
      },
      {
        id: 33,
        name: 'Blueberry',
      },
      {
        id: 35,
        name: 'Apricot',
      },
      {
        id: 37,
        name: 'Guava',
      },
      {
        id: 41,
        name: 'Melon',
      },
      {
        id: 42,
        name: 'Papaya',
      },
      {
        id: 44,
        name: 'Lime',
      },
      {
        id: 47,
        name: 'Grapes',
      },
      {
        id: 52,
        name: 'Persimmon',
      },
      {
        id: 60,
        name: 'Durian',
      },
      {
        id: 64,
        name: 'Blackberry',
      },
      {
        id: 65,
        name: 'Lingonberry',
      },
      {
        id: 66,
        name: 'Kiwi',
      },
      {
        id: 67,
        name: 'Lychee',
      },
      {
        id: 68,
        name: 'Fig',
      },
      {
        id: 69,
        name: 'Gooseberry',
      },
      {
        id: 70,
        name: 'Passionfruit',
      },
      {
        id: 71,
        name: 'Plum',
      },
      {
        id: 72,
        name: 'GreenApple',
      },
      {
        id: 73,
        name: 'Umbu',
      },
    ]);
  }
}
