import { Injectable } from '@nestjs/common';
import { PrismaService } from '../persistence/prisma.service';
import { AuthService } from '../users/auth.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  findAll() {
    return this.prisma.report.findMany({
      where: {
        ownerId: this.authService.getCurrentUser().id,
      },
    });
  }
}
