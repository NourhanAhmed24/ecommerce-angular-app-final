import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login';
import { ProductService } from '../../services/product';
@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  loading = true;
 // productService: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

 ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.productService.getProductById(id).subscribe(product => {
    this.product = product;
  });
}
}