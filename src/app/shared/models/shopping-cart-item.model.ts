export class ShoppingCartItem{
    id:string
    name:string
    imageUrl:string
    price: number
    size:string[]
    color:string[]
    selectedSize:string
    selectedColor:string
    quantity:number

    constructor(init?: Partial<ShoppingCartItem>){
        Object.assign(this, init)
    }

    get totalItemPrice(){

        return this.price * this.quantity
    }
}