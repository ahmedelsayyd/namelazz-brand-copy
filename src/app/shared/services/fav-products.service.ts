import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Product } from "../models/product.model";



@Injectable({
    providedIn: 'root'
})

export class FavProducts{

    constructor(private fs:AngularFirestore){}

    createFavCart(){

        return this.fs.collection(`userFavProducts`).add({ dateCreated: new Date().getTime()})
    }

    async getFavProducts(){
        let FavCartId = await this.getOrCreatFavCartId()
        return this.fs.collection<Product>(`userFavProducts/${FavCartId}/products`).valueChanges()
    }


    async getOrCreatFavCartId(){

        let FavCartId = localStorage.getItem('FavCartId')
        if(FavCartId) return FavCartId
        
        let result = await this.createFavCart()
        localStorage.setItem('FavCartId', result.id)
        return result.id
    }


    getFavCartItem(FavCartId, productId){
        return this.fs.doc(`userFavProducts/${FavCartId}/products/${productId}`)
    }


    async addProductToFavCart(product){

        let FavCartId = await this.getOrCreatFavCartId();
        this.fs.collection(`userFavProducts/${FavCartId}/products`).add({...product})
    }


    async deleteProductFromFavCart(product: Product){
        
        let FavCartId = await this.getOrCreatFavCartId();
        this.getFavCartItem(FavCartId,product.id).delete()
    }
}