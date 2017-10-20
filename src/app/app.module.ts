import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
//views
import { AppComponent }           from './app.component';
import { DashboardComponent }     from './dashboard.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent }      from './products.component';
import { ProductService }         from './product.service';

@NgModule({
  declarations: [  
    AppComponent,
    DashboardComponent,
    ProductDetailComponent ,
    ProductsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  
})



export class AppModule { }
