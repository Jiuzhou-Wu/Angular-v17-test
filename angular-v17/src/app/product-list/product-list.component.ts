import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert("The product has bee shared!");
  } 

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
