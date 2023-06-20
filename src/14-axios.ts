import axios from "axios";

( async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time)
    });
    return promise;
  }

  // API: https://api.escuelajs.co/api/v1/products
  async function getProducts() {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
    return data;
  }

  const res = await delay(1400);
  console.log(res);
  const products = await getProducts();
  console.log(products);
})();
