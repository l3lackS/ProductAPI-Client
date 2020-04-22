import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  /**
   * Variables.
   */
  categories = [
  	{ 
  		name: "CLOTHING",
  		options: {
  			size: ["S", "M", "L", "XL", "XXL"],
  			color: ["RED", "BLUE", "GREEN", "YELLOW"]
  		}
  	},
  	{ 
  		name: "LAPTOPS",
  		options: {
  			size: ["11", "11.6", "11.9", "15", "15.6"],
  			color: ["RED", "BLUE", "GREEN", "YELLOW"]
  		}
  	}
  ];

  /**
   * Constructor.
   */
  constructor() { }

  /**
   * ~ Function to get categories.
   * # Return value of array.
   */
  getCategories() {
  	return this.categories;
  }

  /**
   * ~ Function to get category by id.
   * @ Params: (id) => array lenght.
   */
  getCategoryById(id) {
  	// Condition.
  	if (this.categories[id] == undefined) {
  		return null;
  	}

  	// Execute.
  	return this.categories[id];
  }
}
