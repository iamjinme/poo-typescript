import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductInheritanceService } from "./product-inheritance.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductInheritanceService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // Business logic
    return this.http.anotherRequest();
  }
}