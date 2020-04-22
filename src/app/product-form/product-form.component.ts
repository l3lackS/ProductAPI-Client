import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  /**
   * Variables.
   */
  category_selected: number = -1;
  latest_products: Product[];

  /**
   * Constructor.
   */
  constructor(
    private productService: ProductsService,
    public categories: CategoriesService
  ) { }

  ngOnInit() {
    this.getLatestProducts();
  }

  /**
   * ~ Function to detect change and add options.
   * @ Params: (id) => array length value.
   */
  onChangeCategory(id) {
    // Parse int.
    id = parseInt(id);

    // Condition.
    if (this.categories.getCategoryById(id) == null) {
      return;
    }

    // Execute.
    this.category_selected = id;
  }

  /**
   * ~ Function to get latest products of server.
   * # We use the service of products.
   */
  getLatestProducts() {
    this.productService.getLatestProducts().subscribe(res => this.latest_products = res.data.getLatestProducts);
  }

}
