import { NgModule } from '@angular/core';
 import {RouterModule} from '@angular/router'
 import { ProductsComponent } from './products/products.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{path:"products",component:ProductsComponent},
    {path:"preview",component:PreviewComponent},
    {path:"",redirectTo:"products",pathMatch:"full"}])
  ],
  exports:[RouterModule]
})
export class RouteModule { }
