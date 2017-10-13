import { Component  } from '@angular/core';
import { Product, Condition, Category } from "./product"
//List of products
const PRODUCTS: Product[] = [
  {   id: 1, name: 'Acer Laptop', description: 'Core i7 8 GB RAM Solid State HD 250',
      price: 600, condition: Condition.NEW, category: Category.LAPTOP },
  {   id: 2, name: 'MC Book Air', description: 'Expensive product',
      price: 1600, condition: Condition.NEW, category: Category.LAPTOP },
  {   id: 3, name: 'Dell Inspiron', description: 'Core i5 6 GB RAM Solid State HD 250',
      price: 600, condition: Condition.NEW, category: Category.LAPTOP },
  {   id: 4, name: 'Lenovo Laptop', description: 'Core i7 6 GB RAM HD 1 TB',
      price: 500, condition: Condition.NEW, category: Category.LAPTOP }
];

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>My Products</h2>
    <ul class="products">
      <li *ngFor="let prod of products"
      (click)="onSelect(prod)"
      [class.selected]="prod === selectedProduct">
        <span class="badge">{{ prod.id }}</span> {{ prod.name }}
      </li>
    </ul>
    <product-detail [product]="selectedProduct"></product-detail>
  
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
}) 
export class AppComponent {
  title = 'My Products';
  products = PRODUCTS;
  selectedProduct: Product;
 
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
