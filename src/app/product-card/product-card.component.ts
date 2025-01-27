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

  addToCart(product: Product): void {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('Please log in to add products to the cart.');
      return;
    }

    if (product.stock === 0) {
      alert('Sorry, this product is out of stock.');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const productIndex = cart.findIndex((item: any) => item.id === product.id);
    if (productIndex === -1) {
      cart.push({ ...product, quantity: 1 });
      alert(`Product "${product.title}" has been added to the cart.`);
    } else {
      cart[productIndex].quantity += 1;
      alert(`Product already added to the cart.`);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}