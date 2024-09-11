import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/interfaces/product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Post()
  createProduct(@Body() product: Product): Product {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() updatedProduct: Product): Product {
    return this.productService.updateProduct(Number(id), updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): boolean {
    return this.productService.deleteProduct(Number(id));
  }
}
