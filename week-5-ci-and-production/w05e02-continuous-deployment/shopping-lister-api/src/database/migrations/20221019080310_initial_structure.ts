import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('shopping_lists', (table) => {
      table.increments('id').primary();
      table.string('name').unique().notNullable();
      table.text('description');
      table.timestamps(false, true);
    })
    .createTable('products', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.integer('quantity');
      table.decimal('value');
      table.enum('unit', ['item', 'kg', 'l']).defaultTo('item');
      table.enum('status', ['AWAITING', 'BOUGHT']).defaultTo('AWAITING');

      table.integer('list_id').unsigned().notNullable();
      table
        .foreign('list_id')
        .references('shopping_lists.id')
        .onDelete('CASCADE');

      table.timestamps(false, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('shopping_lists').dropTable('products');
}
