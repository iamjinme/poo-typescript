import { ProductHttpService } from "./services/product-http.service";

(async () => {

  const productService = new ProductHttpService();
  
  const products = await productService.getAll();

  console.log(products.length);
  console.log(products.map(product => product.price));

  const { id: productId } = products[products.length-1]

  try {
    await productService.update(productId, {
      title: 'Another title',
      price: 14000,
      description: 'Boring'
    }); 
  } catch (error) {
    console.log('Something wrong happened');
  }

  const product = await productService.findOne(productId);

  console.log(product);
})();