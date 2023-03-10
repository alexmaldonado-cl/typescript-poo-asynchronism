import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();


productService.create({
  title: 'Product #1',
  price: 100,
  description: "Info product",
  images:      [],
  categoryId: '12'
});


const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'Product with another name'
});

const response = productService.findOne(productId);
console.log('response',response);
