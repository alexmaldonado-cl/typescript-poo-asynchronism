import { faker } from "@faker-js/faker";

import { Product } from "../models/product.model";
import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto";

export class ProductMemoryService{

  private products: Product[] = [];

  public getAll() {
    return this.products;
  }

  public create (data: CreateProductDTO): Product {

    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: faker.datatype.number(),
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      }
    }

    return this.add(newProduct);
  }

  private add(product: Product){
    this.products.push(product);
    return product;
  }

  public updateProduct(id: Product['id'], changes: UpdateProductDTO): Product  {
    const index = this.products.findIndex(item => item.id === id);

    const prevData = this.products[index];

    this.products[index] = {
      ...prevData,
      ...changes
    }

    return this.products[index];
  }


  public findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }

}
