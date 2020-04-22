import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from '../globals/globals';
import { Product } from '../interfaces/product';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
  	private http: HttpClient,
  	private global: Globals,
    private apollo: Apollo
  ) { }

  /**
   * ~ Function to get all products.
   * # Return observable.
   */
  getProducts(): Observable<any> {
    const products = gql`
      query {
        products {
          id,
          name,
          imageURL,
          price,
          createdAt
        }
      }
    `;
    return this.apollo.watchQuery({ query: products }).valueChanges;
  }

  /**
   * ~ Function to get product by id.
   * @ Params: (id) => product id.
   */
  getProductById(id: string): Observable<any>{
    const products = gql`
      query {
        getProductById(id: "${id}") {
          id,
          name,
          imageURL,
          price,
          createdAt
        }
      }
    `;
    return this.apollo.watchQuery({ query: products }).valueChanges;
  }

  /**
   * ~ Function to get products by name.
   * @ Params: (name) => product name contains.
   */
  getProductByName(name: string): Observable<any>{
    const productByName = gql`
      query {
        getProductByName(name: "${name}") {
          id,
          name,
          imageURL,
          price,
          createdAt
        }
      }
    `;
    return this.apollo.watchQuery({ query: productByName }).valueChanges;
  }

  getLatestProducts(): Observable<any> {
    return this.http.get<Product[]>(this.global.BASE_URL + "/graphql?query={getLatestProducts{id, name, imageURL, price}}");
  }
}
