import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductInheritanceService extends BaseHttpService<Product> {
  anotherRequest() {
    this.url;
    // Business logic
  }
}