import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product';


@Injectable()
export class ProductService {
  private products: Product[] = [];

  getAllProducts(): Product[] {
    return this.products;
  }

  createProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  updateProduct(id: number, updatedProduct: Product): Product {
    const product = this.products.find(product => product.id === id);
    if (product) {
      Object.assign(product, updatedProduct);
      return product;
    }
    return null;
  }

  deleteProduct(id: number): boolean {
    const product = this.products.find(product => product.id === id);
    if (product) {
      this.products = this.products.filter(p => p.id !== id);
      return true;
    }
    return false;
  }

}
