export class Product {
    id: string
    name: string
    category: string
    subCategory: string
    images: string[]
    mainImagePng: string
    discount: number
    price: number
    attr:[]
    attrVariables:[]
    sizes: string[]
    colors: string[]
    //colorCode: string
    newArrival?: boolean
    reviews: number
    rating?: number
    description: string
    tags: []
    isFavorite?: boolean= false
    isAvailable: boolean
    stock:number = 500
    sold:number = 80
    inCart: boolean = false;

    constructor(init?: Partial<Product>){
        Object.assign(this, init)
    }

    get priceAfterDiscount(){
        if(this.discount > 0){
            const calcPrice = (this.discount * this.price) /100
            return calcPrice
            
        }else{
            return null
        }
    }

}