import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({isGlobal : true}),
    ClientsModule.register([{
      name: "SHIPPING_NAME",
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:1234@localhost:5672'],
        queue: "shipping_queue",
        queueOptions: {
          durable: false, // Keep QUEUE even after RabbitMQ restarts
        },
        persistent : true  // Keep MESSAGE even after RabbitMQ restarts
      }
    }]),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
