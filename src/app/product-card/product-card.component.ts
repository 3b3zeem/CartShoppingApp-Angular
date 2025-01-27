import { Component, Input } from '@angular/core';
import { Product } from './../types/products';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() product: Product | undefined;

  constructor(private router: Router) {}

  navigateToProductDetail(id: number) {
    this.router.navigate(['/recipe-details', id]);
  }
}