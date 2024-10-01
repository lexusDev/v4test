import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { AppError } from "@shared/errors/AppError";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";

@injectable()
class UpdateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(code: number, data:IProductsDTO): Promise<void> {
        if (!await this.productsRepository.exists(code))
            throw new AppError("Product does not exist!", 404);

        this.productsRepository.update(code, data);
    }
       
}

export { UpdateProductUseCase }