import { Module } from '@nestjs/common';
import { PersistenceModule } from '../persistence/persistence.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthService],
  imports: [PersistenceModule],
  exports: [AuthService],
})
export class UsersModule {}
