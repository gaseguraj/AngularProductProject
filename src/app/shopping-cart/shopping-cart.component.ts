import { Component } from '@angular/core';

@Component({
    template: `
    <div>
        <li *ngFor="let prod of products"
            <span class="badge">{{ prod.id }}</span> {{ prod.name }}
        </li>
    
    </div>`,
})

export class ShopingCartComponent {

}