import { Product } from "./../models/product.model";

export interface CreateProductDTO extends Omit<Product, 'id' | 'category' | 'creationAt' | 'updatedAt'> {
  categoryId: string;
}

export interface UpdateProductDTO extends Partial <CreateProductDTO> {}
