import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { mockProducts, ProductSearchService } from '@ecommerce/product-data-access';
import { debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';
import { RouterModule } from '@angular/router';
 

@Component({
  selector: 'lib-product-search',
  standalone: true,
  imports: [ CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit{

  control = new FormControl('',{nonNullable:true});
  products$!:Observable<Product[]>  

  constructor(private productSearchService: ProductSearchService) {}

ngOnInit(): void {
    this.products$ = this.control.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(text =>text.length>1),
      switchMap((text)=> this.productSearchService.searchByName(text))
    ) 
}
}