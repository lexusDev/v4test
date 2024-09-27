import { AppDataSource } from "@shared/infra/typeorm";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository{
    create(data: IProductsDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }

}

export { ProductsRepository };
