import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

(async function () {
  await prisma.user.deleteMany({});
  await prisma.report.deleteMany({});

  await prisma.user.create({
    data: {
      id: 1,
      email: 'peter@reporterzz.com',
    },
  });
  await prisma.user.create({
    data: {
      id: 2,
      email: 'donna@reporterzz.com',
    },
  });

  const titlesAndTexts = [
    makeReportForUserId(1),
    makeReportForUserId(1),
    makeReportForUserId(1),
    makeReportForUserId(2),
    makeReportForUserId(2),
  ];

  for (const data of titlesAndTexts) {
    await prisma.report.create({ data });
  }
})();

function makeReportForUserId(ownerId) {
  return {
    title: faker.company.catchPhrase(),
    text: faker.lorem.paragraph(),
    ownerId,
  };
}
