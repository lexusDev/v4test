import { inject, injectable } from "tsyringe";

import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(data: IProductsDTO): Promise<void> {

    }

}

export { CreateProductUseCase };