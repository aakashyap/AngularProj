/* root angular module (App module) */
// this file is responsible to resolve the directives(template) in index.html file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'
import { StarComponent } from './shared/star.component'

@NgModule({ // angular module decorator, all elements are arrays
  declarations: [ AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent],
  imports: [ BrowserModule, FormsModule ],
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
