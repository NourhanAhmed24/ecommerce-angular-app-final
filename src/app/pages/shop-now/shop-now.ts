import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product';
import { Router } from '@angular/router';



@Component({
  selector: 'app-shop-now',
  standalone: false,
  templateUrl: './shop-now.html',
  styleUrl: './shop-now.scss',
})
export class ShopNow {

  products: Product[] = [];
  productService: any;
  router: any;

  constructor(productService: ProductService, router: Router) {
    this.productService = productService;
    this.router = router;
  }

   goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }



ngOnInit() {
  this.productService.getProducts().subscribe((res: { products: Product[]; }) => {
    this.products = res.products;
  });
}
}
