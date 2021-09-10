/* root angular module (App module) */
// this file is responsible to resolve the directives(template) in index.html file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({ // angular module decorator, all elements are arrays
  declarations: [ AppComponent, ProductListComponent ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
