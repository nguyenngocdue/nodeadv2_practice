import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor (private prismaService: PrismaService,
    @Inject("NOTIFY_NAME") private notifyService: ClientProxy
  ) {}


  async getShipping(data) {
    let { order_id, email, full_name, address } = data;
    let shippingData =  await this.prismaService.shipping.create({
      data : {order_id, email, full_name, address}
    })
    this.notifyService.emit("success_order", email);
    
    return shippingData;
  }

}
