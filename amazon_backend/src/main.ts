import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(8080);
}
bootstrap();

// prisma 
// 1/ yarn add prisma @prisma/client
// 2/ update lại .env và schema.prisma
// 3/ yarn prisma init
// 4/ yarn prisma db pull
// 5/ yarn prisma generate


// yarn add @nestjs/config