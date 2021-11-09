import { Cart } from "./cart.model"

export class Order{
    datePlaced
    items:any[]
    status:string

    constructor(public shippingData, shoppingCart:Cart, public userId, public orderNumber){

        this.datePlaced = new Date().getTime();
        this.status = 'pinnding';
        this.items = shoppingCart.items.map(item=>{
            return {
                product: {
                  title: item.name,
                  imageUrl: item.imageUrl,
                  price: item.price,
                },
                quantity: item.quantity,
                totalPrice: item.totalItemPrice,
              };
        })
    }
}