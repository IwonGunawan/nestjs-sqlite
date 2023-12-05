import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,
  ) {}

  create(params: CreateProductDto) {
    const products = new CreateProductDto();
    products.type = params.type;
    products.group_type = params.group_type;
    products.brand_id = params.brand_id;
    products.category_id = params.category_id;
    products.name = params.name;
    products.description = params.description;
    products.pin = params.pin;
    products.sku = params.sku;
    products.unit = params.unit;

    for (let i = 1; i <= 2000; i++) {
      products.id = i;
      this.productRepository.create(products as any);
    }

    return {
      message: 'ok',
    };
  }

  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log(updateProductDto);
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
