import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  listOfProducts: ProductModel[];
  constructor(private productList: ProductService) { }

  ngOnInit() {
    this.listOfProducts = this.productList.fetchAllListOfCat();
    console.log(this.listOfProducts);
  }
  getProductIfo(prodId) {
    console.log(prodId);
  }

}
