import axios from "axios";
import { UpdateProductDTO } from "../dtos/product.dto";

import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class BaseHttpService<T> { //* T = TypeClass

  public constructor(private url: string){
  }

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

}



// const service = new BaseHttpService<string>(url);
// service.getAll();

// const service2 = new BaseHttpService<Category>();
// service2.getAll();



(async() => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url);

  const response = await productService.getAll();
  console.log('products: ', response);

  // productService.update<Product['id'], UpdateProductDTO>(1, {
  //   price: 1500,
  //   title: "Coca Cola 600 ml"
  // });

  // const url2 = 'https://api.escuelajs.co/api/v1/categories';
  // const categoryService = new BaseHttpService<Category>(url2);

  // const response2 = await categoryService.getAll();
  // console.log('categories: ', response2.length);

})();
