// product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private products: Product[] = [
    {
      id: 1,
      name: 'Green Pleated Blouse',
      price: 250,
      image: 'assets/shirt1.jpg'
    },
    {
      id: 2,
      name: 'Blue Denim Jeans',
      price: 160,
      image: 'assets/jeans1.jpg'
    },
    {
      id: 3,
      name: 'Beige pockets Jacket',
      price: 180,
      image: 'assets/jacket1.webp'
    },
    {
      id: 4,
      name: 'Balck Dress',
      price: 180,
      image: 'assets/dress2.webp'
    },
    {
      id: 5,
      name: 'Fuschia Blazer',
      price: 230,
      image: 'assets/blazer.webp'
    },
    {
      id: 6,
      name: 'Navy Jumper',
      price: 200,
      image: 'assets/jumper.webp'
    },
    {
      id: 7,
      name: 'Pink Blazer',
      price: 120,
      image: 'assets/blazer2.jpg'
    },
    {
      id: 8,
      name: 'balck & Silver heels',
      price: 80,
      image: 'assets/shoes1.jpg'
    }
  ];

  
  getProducts(): Observable<{ products: Product[] }> {
    return of({ products: this.products });
  }


  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products).pipe(
      map(products => products.find(p => p.id === id))
    );
  }

}