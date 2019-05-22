import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
const routes: Routes = [
  {
      path: '',
      redirectTo: 'category',
      pathMatch: 'full'
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'product/:prductId',
    component: ProductComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
