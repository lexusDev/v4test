import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "../IProductsRepository";
import { Status } from "@modules/products/enums/Status";

class ProductsRepositoryInMemory implements IProductsRepository{
    products: Product[] = [];

    async create({
        brands,
        categories,
        cities,
        created_t,
        creator,
        image_url,
        imported_t,
        ingredients_text,
        labels,
        last_modified_t,
        main_category,
        nutriscore_grade,
        nutriscore_score,
        product_name,
        purchase_places,
        quantity,
        serving_quantity,
        serving_size,
        status,
        stores,
        traces,
        url
    }: IProductsDTO): Promise<Product> {
        const product = new Product();

        Object.assign(product, {
            brands,
            categories,
            cities,
            created_t,
            creator,
            image_url,
            imported_t,
            ingredients_text,
            labels,
            last_modified_t,
            main_category,
            nutriscore_grade,
            nutriscore_score,
            product_name,
            purchase_places,
            quantity,
            serving_quantity,
            serving_size,
            status,
            stores,
            traces,
            url
        });

        if (this.products.length === 0)
            product.code = 1
        else
            product.code = this.products.length + 1;


        this.products.push(product);

        return product;
    }

    async findByCode(code: number): Promise<Product|any> {
        return this.products.find((product) => product.code === code);
    }

    async delete(code: number): Promise<void> {
        this.products.forEach((product) => {
            if (product.code === code) {
                product.status = Status.TRASH
            }
        });
    }

    async find(): Promise<Product[]> {
        return this.products;
    }

    async exists(code: number): Promise<boolean> {
        const product = this.products.filter((product) => product.code === code);
        if (product.length === 0) return false;

        return true;
    }

    async update(code: number, data: IProductsDTO): Promise<Product> {
        throw new Error("Method not implemented.");
    }

}

export { ProductsRepositoryInMemory };