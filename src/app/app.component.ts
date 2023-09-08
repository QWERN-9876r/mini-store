import { Component, OnInit } from '@angular/core';
import { Product } from './types/product';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'test store';
  products: Product[] = []
  loading = true

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
}