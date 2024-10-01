import { inject, injectable } from "tsyringe";

import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppError } from "@shared/errors/AppError";

@injectable()
class RetrieveProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(code: number): Promise<Product|any> {
        const product = this.productsRepository.findByCode(code);

        if (!await this.productsRepository.exists(code))
            throw new AppError("Product does not exist!", 404);

        return product;
    }
}

export { RetrieveProductUseCase };