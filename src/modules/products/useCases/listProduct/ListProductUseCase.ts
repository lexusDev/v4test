import { inject, injectable } from "tsyringe";

import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Product } from "@modules/products/infra/typeorm/entities/Product";

@injectable()
class ListProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(page: number|any, limit: number|any): Promise<Product[]> {
        const product = this.productsRepository.find(page, limit);
        return product;
    }
}

export { ListProductUseCase };