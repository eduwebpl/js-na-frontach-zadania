import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './persistence/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT = 3300 } = process.env;
  await app.get(PrismaService).enableShutdownHooks(app);
  await app.listen(PORT);
  console.log(`Server is running: http://localhost:${PORT}`);
}
bootstrap();
