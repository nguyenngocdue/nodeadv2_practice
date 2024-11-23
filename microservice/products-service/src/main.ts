import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:1234@localhost:5672'],
        queue: "product_queue",
        queueOptions: {
          durable: false, // Keep QUEUE even after RabbitMQ restarts
        },
        persistent : true // Keep MESSAGE even after RabbitMQ restarts

      }
    }
  );
  await app.listen();
}
bootstrap();
