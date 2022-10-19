import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // Allow only those front-ends:
    origin: ['http://127.0.0.1:8200', 'http://localhost:8200'],
  });
  await app.listen(3000);
}
bootstrap();
