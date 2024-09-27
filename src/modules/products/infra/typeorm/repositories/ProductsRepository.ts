import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository{
    private repository: Repository<Product>;

    constructor() {
        this.repository = AppDataSource.getRepository(Product);
    }

    async create(data: IProductsDTO): Promise<Product> {
        const product = this.repository.create(data);
        this.repository.save(product);

        return product;
    }
    async findById(id: string): Promise<Product|null> {
        const product = await this.repository.findOneBy({ id });
        return product;
    }

    async find(): Promise<Product[]> {
        const product = await this.repository.find();
        return product;
    }

}

export { ProductsRepository };
