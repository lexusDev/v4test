import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { Product } from "../entities/Product";
import { Status } from "@modules/products/enums/Status";

class ProductsRepository implements IProductsRepository{
    private repository: Repository<Product>;

    constructor() {
        this.repository = AppDataSource.getRepository(Product);
    }

    async update(code: number, data: IProductsDTO): Promise<Product|any> {
        const product = await this.repository.update(code, data);
        return product;
    }

    async exists(code: number): Promise<boolean> {
        return this.repository.existsBy({ code });
    }
    
    async delete(code: number): Promise<void> {
        this.repository.createQueryBuilder()
        .update(Product)
        .set({ status: Status.TRASH })
        .where("code = :code", { code })
        .execute();
    }

    async create(data: IProductsDTO): Promise<Product> {
        const product = this.repository.create(data);
        this.repository.save(product);

        return product;
    }
    async findByCode(code: number): Promise<Product|null> {
        const product = await this.repository.findOneBy({ code });
        return product;
    }

    async find(page = 1, limit = 10): Promise<Product[]> {
        const product = this.repository.createQueryBuilder()
            .select()
            .limit(limit)
            .offset((page -1) * limit)
            .getMany();
        return product;
    }

}

export { ProductsRepository };
