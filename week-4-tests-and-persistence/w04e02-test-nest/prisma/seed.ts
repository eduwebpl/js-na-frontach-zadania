import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from 'bcryptjs';

const genPassword = () => bcrypt.hash('som3pa55w0rd', 8);

(async function () {
  await prisma.user.deleteMany({});

  await prisma.user.create({
    data: {
      id: 1,
      email: 'peter@myclient.com',
      password: await genPassword(),
      role: 'ADMIN',
    },
  });
  await prisma.user.create({
    data: {
      id: 2,
      email: 'donna@myclient.com',
      password: await genPassword(),
      role: 'USER',
    },
  });
  await prisma.user.create({
    data: {
      id: 3,
      email: 'john@myclient.com',
      password: await genPassword(),
      role: 'USER',
    },
  });
  await prisma.user.create({
    data: {
      id: 4,
      email: 'jenna@myclient.com',
      password: await genPassword(),
      role: 'ADMIN',
    },
  });
})();
