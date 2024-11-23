import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, lastValueFrom, of, retry, timeout } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject("PRODUCT_NAME") private productService: ClientProxy,
    @Inject("NOTIFY_NAME") private notifyService: ClientProxy
  ) {

  }

  @Get("/get-product")
  getHello() {
    let dataProduct = lastValueFrom(this.productService.send("get_product", "Hello!"));
    return dataProduct;
  }

  @Post("/order")
  async order(@Body() order) {
    let { email, product_id, user_id, full_name, phone, address } = order;
    // send the email to acceptance service
    console.log("from_email:", email);
    this.notifyService.emit("confirm_order", email)

    // save the order
    let order_data = await lastValueFrom(this.productService.send("order_key", order).pipe(
      timeout(1000),
      retry(3),
      catchError(err => {
        console.log("Service notify not active");
        return of("Service notify not active");
      }))
    );


    console.log(order_data);
    return "Order successfully";
  }
}
