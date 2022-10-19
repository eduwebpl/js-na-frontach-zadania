import { Module } from '@nestjs/common';
import Knex from 'knex';
import knexfile from '../../knexfile';
import { Model, knexSnakeCaseMappers } from 'objection';

@Module({})
export class DatabaseModule {
  constructor() {
    const env = process.env.NODE_ENV || 'development';

    const knex = Knex({
      ...knexfile[env],
      ...knexSnakeCaseMappers(),
    });

    Model.knex(knex);
  }
}
