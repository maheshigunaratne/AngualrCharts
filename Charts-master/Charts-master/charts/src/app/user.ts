import { DecimalPipe } from "@angular/common";



export class User
{
    applicationId:string;
    productId:number;
    productName:string;
    orderId:string;
    productVariantId:number;
    productVariantName:string;
    purchaseDate:Date;
    validDate:Date;
    totalAmount:DecimalPipe;
    device:string;
    paymentMode:string;
    dateofBirth:Date;
    postalArea:string;
    total:number;
}