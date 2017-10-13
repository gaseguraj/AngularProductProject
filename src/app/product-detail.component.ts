import { Component, Input } from "@angular/core";

import { Product } from "./product"

@Component({
    selector: 'product-detail',
    template: `
  <div *ngIf="product">
    <h2>{{product.name}}</h2>
      <label>Name</label>
      <input [(ngModel)]="product.name" placeholder="name">
      <div><label>Id:</label>{{product.id}}</div>
      <div><label>Description::</label>{{product.description}}</div>
      <div><label>Price:</label>{{product.price}}</div>
      <div><label>Condition:</label>{{product.condition}}</div>
      <div><label>Category:</label>{{product.category}}</div>
  </div>    
    `
})

export class ProductDetailComponent{
    @Input() product: Product;
}