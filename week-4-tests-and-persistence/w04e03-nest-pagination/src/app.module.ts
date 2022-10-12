import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FruitsModule } from './fruits/fruits.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [FruitsModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
