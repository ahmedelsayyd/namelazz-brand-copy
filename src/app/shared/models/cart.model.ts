import { ShoppingCartItem } from "./shopping-cart-item.model"

export class Cart{

    items:ShoppingCartItem[] =[];
    couponDisc:number
    priceAfterCouponDiscound: number;
    shipping: number=1000



    constructor(public itemsMap?:ShoppingCartItem[], public couponDiscPercentage?:number){
        
        itemsMap.map(item=>{
            
            this.items.push(new ShoppingCartItem(item))
        })
    }

    get subTotalPrice(){
        let totalPrice = 0;
        this.items.forEach((el) =>{
           totalPrice += el.quantity * el.price
            
        })
        return totalPrice
    }


    get totalPrice(){

        if(this.couponDiscPercentage){
            
            this.couponDisc = (this.subTotalPrice * this.couponDiscPercentage) /100
            this.priceAfterCouponDiscound = this.subTotalPrice - this.couponDisc
            return this.priceAfterCouponDiscound
        }

         return this.subTotalPrice
    }


    get totalItemsCount():number{

        let count = 0;
        if(this.itemsMap.length > 0){

            for(let productId in this.itemsMap){
                count += this.itemsMap[productId].quantity
            }
        }
        return count
    }

}