import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
 
@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() quantity = 0;
}