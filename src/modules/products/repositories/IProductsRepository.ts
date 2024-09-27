import { IProductsDTO } from "../dtos/IProductsDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
    create(data: IProductsDTO): Promise<void>;
    findById(id: string): Promise<Product>;
    find(): Promise<Product[]>;
}

export { IProductsRepository };