import { Module } from '@nestjs/common';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ShoppingListsModule, DatabaseModule],
})
export class AppModule {}
