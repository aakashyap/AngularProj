// file name convention is to use feature name (app) . component
// each component has 3 things : template ( the view or the html file) , class (as shown in this file) and metadata (selector, templateUrl & styleUrls in this file)
import { Component } from '@angular/core';

// metadata
@Component({ // decorator
  selector: 'pm-root',  // directive name used in HTML
  templateUrl: './app.component.html', // can be declared like this or by using inline *template* param with value either in "" for single line or within ``(backsticks) if multiple line html is required
  styleUrls: ['./app.component.css']
})

/* export - so that other components can access this
   convention to name class : Feature name suffixed by Component, also root component is called AppComponent by convention
*/
export class AppComponent {
  pageTitle: string = 'Acme Product Management'; //property

  // methods if any ...
}