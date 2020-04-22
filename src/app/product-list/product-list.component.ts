import { Component, OnInit } from '@angular/core';
import { faSearch, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  /**
   * Variables.
   */
  products: Product[];
  search_loaded: boolean = false;

  /**
   * Icons.
   */
  faSearch = faSearch;
  faCog = faCog;
  faTimes = faTimes;

  /**
   * Constructor.
   */
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  /**
   * ~ Function to get all products of server.
   * # We use the service of products.
   */
  getProducts() {
    this.productService.getProducts().subscribe(res => this.products = res.data.products);
  }

  /**
   * ~ Function to execute form search.
   * @ Params: (form) => NgForm values.
   */
  goSearch(form: NgForm) {
    // Variables.
    let data = form.value;
    let value = data.search_value;

    // Secure.
    if (value.length == 0) {
      return;
    }

    // Set boolean true.
    this.search_loaded = true;

    // Execute.
    this.getProductByName(value);
  }

  /**
   * ~ Function to find product on server.
   * @ Params: (value) => search by name.
   */
  getProductByName(value: string) {
    this.productService.getProductByName(value).subscribe(res => this.products = res.data.getProductByName);
  }

  /**
   * ~ Function to clear product find.
   * # Clear input and get all products.
   */
  clearSearch() {
    // Condition.
    if (!this.search_loaded) {
      return;
    }

    // Get all products.
    this.getProducts();

    // Set boolean false.
    this.search_loaded = false;
  }

  /**
   * ~ Function to delete product.
   * @ Params: (ProductID) => string id.
   */
  deleteProduct(ProductID: string) {
    // Delete product.
    /*this.productService.deleteProduct(ProductID).subscribe((res) => {
      // Notification.
      console.log(res);

      // Refresh products.
      this.getProducts();
    });*/
  }
}
