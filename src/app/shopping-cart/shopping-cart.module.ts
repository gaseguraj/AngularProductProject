import { ShopingCartComponent } from './shopping-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 



@NgModule({
    declarations: [  
       
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ShopingCartComponent
    ],
    providers: [],
    bootstrap: [ShopingCartComponent]
  })
  export class ShopingCartModule { }