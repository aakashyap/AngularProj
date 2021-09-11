import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})


/*
Data Binding : 
1. Interpolation : <h1>{{pageTitle}}</h1> where pageTitle is a property (member) of class. It is a one way binding from class to template. 
   egs: {{'Title'+pageTitle}} , {{2*20+1}}, <h1 innerText={{pageTitle}}></h1>
2. Property Binding: <img [src]='product.imageUrl'> or <img src={{product.imageUrl}} > or <input type='text' [disabled]='isDisabled'/> or 
   <image src='http:://myimages.org/{{product.imageUrl}}' >

Built-in Directives : 
*ngIf: If logic, *ngFor: For loops, these are present in BrowserModule, 
[(ngModel)] -> two way binding, it is part of FormsModule (add in app module).

Event Binding :
1. <button (click)='toggleImage()'> where toggleImage is a method in our component class


Pipes : 
date, number, decimal, percent, currency, json, etc. => to format data \
before displaying. Custom pipes can also be created.
eg. {{product.code | lowercase}}
    <img [src]='product.imageUrl' [title]='product.productName | uppercase'>
    {{product.price | currency | lowercase}}
    {{product.price | currency:'USD':'symbol':'1.2-2' | lowercase}}


Interfaces: 
Similar to C++
export interface IProduct {}, export class DoSomething implements IProduct {}


Component LifeCycle :

create->render->create & render children->process changes(continuous loop)->Destroy
Life cycle hooks - 
	1. OnInit: Perform component initialization, retrieve data.product
	2. OnChanges: Perform action after change to input props
	3. OnDestroy: Perform cleanup

Custom pipes: 
* check shared/convert-to-spaces.pipe.ts
* declare a class there which needs to implement PipeTransform, declare this new pipe class 
in app module. Implement the transform method, whose first parameter will be the value pipe 
is being applied upon, then additional params can be passed as : seperated values.

Getter and setter:
Check _listFilter and it's corresponding getter setters.

Arrow function: 
shorter way to write a function
eg. This function
capitalizeName(product: IProduct): string {
	return product.productName.toUpperCase();
}
can be written as:

(product: IProduct) => product.productName.toUpperCase(); 
OR multiline version
(product: IProduct) => {
	console.log("...");
	product.productName.toUpperCase(); 
}


Using a component: 
1. As a directive - as shown in index.html
2. As a routing target

Nested component: 
check shared/star.component.ts
Input and output between container and nested component - 
e.g. here inside star component, rating variable is marked as @Input and ratingClicked is @Output
<td>
	<pm-star [rating]='product.starRating'
	(ratingClicked)='onRatingClicked($event)'>
	</pm-star>
</td>
*/
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;

	private _listFilter: string = '';
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		console.log('In setter:' + value);
		this.filteredProducts = this.performFilter(value);
	}

	filteredProducts: IProduct[] = [];
	products: IProduct[] = [
	  {
	    "productId": 1,
	    "productName": "Leaf Rake",
	    "productCode": "GDN-0011",
	    "releaseDate": "March 19, 2021",
	    "description": "Leaf rake with 48-inch wooden handle.",
	    "price": 19.95,
	    "starRating": 3.2,
	    "imageUrl": "assets/images/leaf_rake.png"
	  },
	  {
	    "productId": 2,
	    "productName": "Garden Cart",
	    "productCode": "GDN-0023",
	    "releaseDate": "March 18, 2021",
	    "description": "15 gallon capacity rolling garden cart",
	    "price": 32.99,
	    "starRating": 4.2,
	    "imageUrl": "assets/images/garden_cart.png"
	  },
	  {
	    "productId": 10,
	    "productName": "Video Game Controller",
	    "productCode": "GMG-0042",
	    "releaseDate": "October 15, 2020",
	    "description": "Standard two-button video game controller",
	    "price": 35.95,
	    "starRating": 4.6,
	    "imageUrl": "assets/images/xbox-controller.png"
	  }
	];

	toggleImage() : void {
		this.showImage = !this.showImage;
	}

	ngOnInit(): void {
		console.log('In OnInit');
		this.listFilter = 'cart';
	}

	performFilter(filterBy: string) : IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter(
			(product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
	}

	onRatingClicked(message: string) : void {
		this.pageTitle = 'Product List: ' + message;
	}
}