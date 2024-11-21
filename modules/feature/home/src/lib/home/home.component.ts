 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import {  RecommendedProductsService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { Observable } from 'rxjs';
@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$:Observable<any>

  constructor(private recommendedProductsService: RecommendedProductsService) {
    this.products$ = this.recommendedProductsService.getProducts();
  }

}
