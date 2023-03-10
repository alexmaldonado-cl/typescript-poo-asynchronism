import { ProductHttpService } from "./services/product-http.service";



(async() => {

  const productService = new ProductHttpService();

  console.log('==='.repeat(15));

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map(item => `${item.id} => ${item.title}`));

  console.log('==='.repeat(15));

  // const productId = products[0].id;
  // await productService.update(productId, {
  //   price: 1500,
  //   title: "Coca Cola 600 ml"
  // });

  // const product = await productService.findOne(productId);
  // console.log(product);

})();
