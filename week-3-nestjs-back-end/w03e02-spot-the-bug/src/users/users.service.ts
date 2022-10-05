import { Injectable } from '@nestjs/common';
import { PrismaService } from '../persistence/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getOne(email: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: { email: email.toLowerCase().trim() },
    });
  }
}
