import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as nodemailer from 'nodemailer';


@Injectable()
export class ProductService {

    constructor(
        private prismaService: PrismaService,
    ) { }

    async searchProduct(name) {
        // let dataCache = await this.cacheManager.get("SEARCH_PRODUCT")

        // // kiểm tra cache => 
        // if (dataCache) {
        //     return dataCache
        // }

        // SELECT * FROM product WHERE product_name like '%name%'
        let data = await this.prismaService.product.findMany({
            where: {
                product_name: {
                    contains: name
                },
            }
        });


        return data;
    }


    async  orders(order) {
        let { email, product_id, user_id, full_name, phone, address } = order;

        // yarn add nodemailer
        // gửi mail xác nhận đơn hàng      
        let configMail = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "duengocnguyen@gmail.com",
                pass: "zltoioynyumuvxld"
            }
        })


        let infoMail = {
            from: "duengocnguyen@gmail.com",
            // to: email, // "khaitruong2112@gmail.com"
            to: email,// "kienthucdaydo@gmail.com",
            subject: "Đặt hàng qua Amazon",
            html: "<h1> Xác nhận đơn hàng thành công </h1>"
        }

        configMail.sendMail(infoMail, error => error);

        // throw new Error("error")

        // lưu order
        let orderData = await this.prismaService.orders.create({ data: { product_id, user_id } })

        // lưu shipping
        if (orderData) {
            // lưu database shipping bên MySQL
            console.log("Lưu shipping" + orderData.order_id)
        }

        // gửi mail thành công
        infoMail = {
            from: "duengocnguyen@gmail.com",
            to: email ,//"kienthucdaydo@gmail.com",
            subject: "Đặt hàng qua Amazon",
            html: "<h1 style='color:red' > Đặt hàng thành công </h1>"
        }

        configMail.sendMail(infoMail, error => error);

        return "Đặt hàng thành công"

    }
}
