import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor (private prismaService: PrismaService,
    @Inject("SHIPPING_NAME") private shippingService: ClientProxy

  ) { }
  async getProduct() {
    return await  this.prismaService.product.findMany();
  }

  async orders(data) {
    let { product_id, user_id, email, full_name, address } = data;
    let orderData = await this.prismaService.orders.create({
      data: { product_id, user_id}
    });

    if (orderData){
      // save shipping => service shipping
        let shippingData = await lastValueFrom(this.shippingService.send("shipping_product", 
          { order_id : orderData.order_id, email, full_name, address }
        ));
        console.log("shippingData", shippingData);
      }
    return orderData;
  }
}


// npx add prisma @prisma/client
// npx prisma init
// update .env
// npx prisma db pull
// npx prisma generate
