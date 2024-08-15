import { Component } from '@angular/core';
import { products } from '../products';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ MatFormFieldModule, MatIconModule, MatInputModule, ProductAlertsComponent ],
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
