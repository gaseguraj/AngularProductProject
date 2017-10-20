import { ProductService } from './product.service';
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "./product"


@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

}) 
export class ProductsComponent implements OnInit{
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService,
              private router: Router){}
  
  ngOnInit(): void{
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log("selected");
  }

  getProducts(): void{
    this.productService.getProducts()
      .then(products => this.products = products);
  }

  goToDetail(): void{
    this.router.navigate(['/detail', this.selectedProduct.id]);
}
}
