import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productId: string;
singleProduct: ProductModel[];
  constructor(private router: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {
    this.router.paramMap.subscribe(
      (params: ParamMap)  => {
        if (params.has('prductId')) {
          console.log('It has');
          this.productId = params.get('prductId');
          this.singleProduct = this.productService.getSingleProduct(this.productId);
          console.log(this.singleProduct);
        }
      }
    );
  }

}
