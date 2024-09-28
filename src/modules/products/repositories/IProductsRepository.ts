import { IProductsDTO } from "../dtos/IProductsDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
    create(data: IProductsDTO): Promise<Product>;
    findByCode(code: number): Promise<Product|null>;
    delete(code: number): Promise<void>;
    find(): Promise<Product[]>;
    exists(code: number): Promise<boolean>;
    update(code: number, data: IProductsDTO): Promise<Product>;
}

export { IProductsRepository };