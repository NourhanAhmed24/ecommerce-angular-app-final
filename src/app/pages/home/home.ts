import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
    });
  }

  trackById(index: number, product: Product): number {
    return product.id;
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder.jpg'; 
  }

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  goToShopNow(){
    this.router.navigate(['/shop-now']);
  }
}