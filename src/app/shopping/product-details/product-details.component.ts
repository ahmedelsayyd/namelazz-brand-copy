import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';


@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit , OnDestroy{

  @ViewChild('thumbImageContainer') thumbImageContainer: ElementRef
  @ViewChild('mainImage') mainImage: ElementRef

  @ViewChildren('productColorElms') productColorElms: QueryList<ElementRef>
  @ViewChild('colorsList') colorsList: ElementRef
  @ViewChild('sizesList') sizesList: ElementRef
  product:Product;
  similarProducts: Product[];
  isFavorite :boolean= false

  productColors = [
      {code: '#000000', name: 'black'},
      {code:'#ffffff', name: 'white'},
      {code:'#935116', name: 'brown'},
      {code:'#EDBB99', name: 'rose'},
      {code:'#85C1E9', name: 'skyblue'},
      {code:'#d7c797', name: 'beig'}];

  loadedText: string = 'details';
  productSubscription: Subscription;

  selectedSize: string;
  selectedColor: string;

  constructor(
      private renderer: Renderer2,
      private productService: ProductService,
      private route: ActivatedRoute,
      private cartService:ShoppingCartService,
      private msg: NzMessageService) { }

  ngOnInit(): void {

    let productId = this.route.snapshot.queryParamMap.get('id');
  
    this.productSubscription = this.productService.getProduct(productId)
    .pipe(switchMap(p =>{
        this.product = p;
   

    return this.productService.getAllProducts()
      
    }))
    .subscribe((products: Product[])=> {
      this.similarProducts = products.filter(p=> p.category === this.product.category).slice(0, 4)
      
    })


 
  }
  


  ngAfterViewInit() {
    
    this.productColorElms.forEach((el) => {

      let color = el.nativeElement.dataset.color
      this.renderer.setStyle(el.nativeElement, 'backgroundColor', color)
    });
  }


  showImage(src) {
    let containedEImgThumbs = this.thumbImageContainer.nativeElement.childNodes

    for (let elm of containedEImgThumbs) {
      if (elm.nodeName === 'DIV') {
        for (let elmImg of elm.childNodes) {

          if (elmImg.src != src) elmImg.classList.remove("active");
          else elmImg.classList.add("active");
        }
      }
    }

    this.mainImage.nativeElement.src = src;
    this.mainImage.nativeElement.setAttribute('xoriginal', src);
  }

  showText(name) {

    if (name === 'details') {
      this.loadedText = 'details';

    } else if (name === 'shipping') {
      this.loadedText = 'shipping';

    } else if (name === 'recommends') {
      this.loadedText = 'recommends';

    }
  }


  selectColor(color) {
    this.selectedColor = color;
    let colorsListElms = this.colorsList.nativeElement.childNodes;

    colorsListElms[0].classList.add('active');

    for (let colorItem of colorsListElms) {
      if (colorItem.nodeName === 'LI') {
        for (let el of colorItem.childNodes) {

          if (el.dataset.color == color) this.renderer.addClass(colorItem, 'active')
          else this.renderer.removeClass(colorItem, 'active')

        }
      }
    }
  }

  
  selectSize(size) {

    this.selectedSize = size;
    let sizesListElms = this.sizesList.nativeElement.childNodes;

    // this.renderer.addClass(sizesListElms[0], 'active')
    sizesListElms[0].classList.add('active');

    for (let sizeItem of sizesListElms) {
      if (sizeItem.nodeName === 'LI') {

        if (sizeItem.dataset.size == size) this.renderer.addClass(sizeItem, 'active')
        else this.renderer.removeClass(sizeItem, 'active')
      }
    }
  }


  productNameSplit(name, separator, limit, status){ 
    return this.productService.splitString(name, separator,limit, status)
  }


  addToCart(){
    if(!this.selectedSize) return

    let product = {
      ...this.product,
      selectedSize: this.selectedSize,
      selectedColor: this.selectedColor,
    }
    this.cartService.addOrUpdateToCart(product,{quantity: 1}).then(()=>{
      this.msg.success('Product Successfully added to cart')
    })
    this.productService.editProduct(this.product.id, {inCart: true})
    
  }


  addToFavorite(product){
    this.isFavorite = !this.isFavorite

    if(this.isFavorite === true){
      this.productService.editProduct(product.id, {isFavorite: true})
    }else{ 
      this.productService.editProduct(product.id, {isFavorite: false})
    }
    
  }

  ngOnDestroy(){
    if(this.productSubscription) this.productSubscription.unsubscribe()
  }
  
}
