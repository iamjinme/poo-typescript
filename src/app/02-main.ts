import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Any product',
  price: 14000,
  description: 'This is a description',
  categoryId: 1,
  images: [] 
});

const products = productService.getAll();

const { id: productId } = products[0];

productService.update(productId, {
  title: 'Another title',
});

const updated = productService.findOne(productId);

console.log(updated);

