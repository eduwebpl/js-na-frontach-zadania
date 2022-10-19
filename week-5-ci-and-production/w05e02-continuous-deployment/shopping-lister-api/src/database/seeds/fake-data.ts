/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('shopping_lists').del();
  await knex('products').del();

  await knex('shopping_lists').insert([
    { id: 1, name: 'Shopping #1' },
    { id: 2, name: 'Groceries' },
  ]);

  await knex('products').insert({
    id: 1,
    name: 'SmartPhone',
    quantity: 1,
    value: 2300,
    list_id: 1,
  });
  await knex('products').insert({
    id: 2,
    name: 'Tomatoes',
    quantity: 2,
    value: 6,
    unit: 'kg',
    list_id: 2,
  });
  await knex('products').insert({
    id: 3,
    name: 'Potatoes',
    quantity: 11,
    value: 2.44,
    unit: 'kg',
    status: 'BOUGHT',
    list_id: 2,
  });
  await knex('products').insert({
    id: 4,
    name: 'Onions',
    quantity: 2,
    value: 3,
    unit: 'kg',
    list_id: 2,
  });
}
