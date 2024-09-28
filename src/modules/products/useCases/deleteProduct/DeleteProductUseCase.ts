import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(code: number): Promise<void> {
        if (!await this.productsRepository.exists(code))
            throw new AppError("Product does not exist!", 404);

        this.productsRepository.delete(code);
    }
       
}

export { DeleteProductUseCase }