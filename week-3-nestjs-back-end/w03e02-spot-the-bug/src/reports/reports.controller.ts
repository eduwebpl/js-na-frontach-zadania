import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../users/auth.guard';
import { ReportsService } from './reports.service';

@Controller('reports')
@UseGuards(AuthGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }
}
