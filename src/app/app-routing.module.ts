import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//views
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    { path: '',             redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'products',     component: ProductsComponent },
    { path: 'dashboard',    component: DashboardComponent },
    { path: 'detail/:id',   component: ProductDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
