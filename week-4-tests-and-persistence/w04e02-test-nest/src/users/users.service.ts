import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getOne(where, selectPassword = false) {
    return this.prisma.user.findUniqueOrThrow({
      where,
      select: {
        email: true,
        id: true,
        role: true,
        password: selectPassword,
      },
    });
  }

  getAll() {
    return this.prisma.user.findMany({
      select: {
        email: true,
        id: true,
        role: true,
      },
    });
  }

  saveToken(userId: number, accessToken: string | null) {
    return this.prisma.user.update({
      data: { accessToken },
      where: { id: userId },
    });
  }
}
