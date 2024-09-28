import { inject, injectable } from "tsyringe";

import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Product } from "@modules/products/infra/typeorm/entities/Product";

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(data: IProductsDTO): Promise<Product> {
        const product = this.productsRepository.create(data);
        return product;
    }
}

export { CreateProductUseCase };