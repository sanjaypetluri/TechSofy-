import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { PreviewComponent } from './preview/preview.component';
import { RouteModule } from './/route.module';
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
