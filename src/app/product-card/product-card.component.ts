import { Component, Input } from '@angular/core';
import { Product } from './../types/products';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() product: Product | undefined;
}
