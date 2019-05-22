import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private product: ProductModel[] = [
  {
     'productId': 'product-1',
     'product_name': 'MEN\'S BETTER THAN NAKED&trade; JACKET',
     'product_image_url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
     'product_description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    'productId': 'product-2',
    'product_name': 'MEN\'S BETTER THAN NAKED&trade; JACKET',
    'product_image_url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
    'product_description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',

 },
 {
  'productId': 'product-3',
  'product_name': 'MEN\'S BETTER THAN NAKED&trade; JACKET',
  'product_image_url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
  'product_description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
}
];
  constructor() { }

  fetchAllListOfCat() {
    return this.product.slice();
  }

  getSingleProduct(product_id: string) {
   return this.product.filter(
      (productId) => {
        return productId.productId === product_id;
      }
      );
  }
}
