import { Component } from '@angular/core';

export enum Condition { NEW, USED, DISCONTINUED}
export enum Category { LAPTOP, PC}

export class Product{
  id: number;
  name: string;
  description: string;
  price: number;
  condition: Condition;
  category: Category;
}

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>{{product.name}}</h2>
    <label>Name</label>
    <input [(ngModel)]="product.name" placeholder="name">
    <div><label>Id:</label>{{product.id}}</div>
    <div><label>Description::</label>{{product.description}}</div>
    <div><label>Price:</label>{{product.price}}</div>
    <div><label>Condition:</label>{{product.condition}}</div>
    <div><label>Category:</label>{{product.category}}</div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'My Products';
  product: Product = {
    id: 1,
    name: 'Acer Laptop',
    description: 'Core i7 8 GB RAM Solid State HD 250',
    price: 600,
    condition: Condition.NEW,
    category: Category.LAPTOP
  }
}
