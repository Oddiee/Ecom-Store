import { Component, signal } from '@angular/core';
import { Product } from './models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';


@Component({
  selector: 'app-product-lists',
  imports: [ProductCardComponent],
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.scss'
})
export class ProductListsComponent {

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
  const data = await res.json();
  this.products.set(data);
  }

   products = signal<Product[]>([
      //  {
      //    id: 1,
      //    title: 'MSI Z370-A PRO Motherboard',
      //    price: 2500.50,
      //    image: 'https://asset.msi.com/resize/image/global/product/product_7_20170927172142_59cb6da6b04cb.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
      //    stock: 15,
      //  },
      //  {
      //   id: 2,
      //    title: 'Intel Core Ultra 5 (245K)',
      //   price: 3500,
      //    image: 'https://media.ldlc.com/r1600/ld/products/00/06/17/51/LD0006175190.jpg',
      //    stock: 2,
      //  },
      //  {
      //  id: 3,
      //  title: 'Intel Core Ultra 7 (265K)',
      //    price: 5500,
      //    image: 'https://plecom.imgix.net/iit-403980-669022.png',
      //    stock: 0,
      //  },
      //  {
      //    id: 4,
      //    title: 'Intel Core Ultra 9 (285K)',
      //    price: 7500,
      //    image: 'https://inmedia.ma/wp-content/uploads/2024/11/Intel-Core-Ultra-9-285K-Front.webp',
      //    stock: 9,
      //  }
     ]);

}
