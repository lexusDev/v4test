import { IProductsDTO } from "../dtos/IProductsDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
    create(data: IProductsDTO): Promise<Product>;
    findById(id: string): Promise<Product|null>;
    find(): Promise<Product[]>;
}

export { IProductsRepository };