import { Module } from '@nestjs/common';
import { FruitsController } from './fruits.controller';
import { FruitsRepository } from './fruits.repository';

@Module({
  controllers: [FruitsController],
  providers: [FruitsRepository],
})
export class FruitsModule {}
