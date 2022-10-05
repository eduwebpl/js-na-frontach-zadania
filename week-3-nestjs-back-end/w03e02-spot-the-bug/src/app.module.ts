import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ReportsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
