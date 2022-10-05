import { Module } from '@nestjs/common';
import { PersistenceModule } from '../persistence/persistence.module';
import { UsersModule } from '../users/users.module';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [PersistenceModule, UsersModule],
})
export class ReportsModule {}
