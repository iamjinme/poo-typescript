import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<T> {

  constructor(
    protected url: string
  ){}

  async getAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<TypeID, TypeDTO>(id: TypeID, changes: TypeDTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);

    return data;
  }
}

(async () => {

  const urlProducts = 'https://api.escuelajs.co/api/v1/products';

  const productService = new BaseHttpService<Product>(urlProducts);

  const products = await productService.getAll();

  console.log('Products', products.length);

  const urlCategories = 'https://api.escuelajs.co/api/v1/categories';

  const categoryService = new BaseHttpService<Category>(urlCategories);

  const categories = await categoryService.getAll();

  console.log('Categories', categories.length)

  const updated = productService.update<Product['id'], UpdateProductDto>(1, {});

})();