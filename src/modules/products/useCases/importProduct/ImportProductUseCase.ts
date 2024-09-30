import { parse } from "csv-parse";
import fs from "fs";

import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { inject, injectable } from "tsyringe";
import { Status } from "@modules/products/enums/Status";

@injectable()
class ImportProductUseCase {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    loadCategories(file: Express.Multer.File): Promise<IProductsDTO[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const products: IProductsDTO[] = [];

            const parseFile = parse({
                delimiter: '"',
                columns: true,
                autoParse: true
              });

            stream.pipe(parseFile);
    
            parseFile
                .on("data", async (line) => {
                    const { code,
                        url,
                        creator,
                        created_t,
                        last_modified_t,
                        product_name,
                        quantity,
                        brands,
                        categories,
                        labels,
                        cities,
                        purchase_places,
                        stores,
                        ingredients_text,
                        traces,
                        serving_size,
                        serving_quantity,
                        nutriscore_score,
                        nutriscore_grade,
                        main_category,
                        image_url } = line;

                    const productExists = await this.productsRepository.exists(code); 

                    if (!productExists) {

                        await this.productsRepository.create({
                            code: code === '' ? 0 : Number(code),
                            status: Status.DRAFT,
                            imported_t: new Date(),
                            creator,
                            created_t: created_t === '' ? 0 : Number(created_t),
                            last_modified_t: last_modified_t === '' ? 0 : Number(last_modified_t),
                            url,
                            product_name,
                            quantity,
                            brands,
                            categories,
                            labels,
                            cities,
                            purchase_places,
                            stores,
                            ingredients_text,
                            traces,
                            serving_size,
                            serving_quantity: serving_quantity === '' ? 0 : Number(serving_quantity),
                            nutriscore_score: nutriscore_score  === '' ? 0 : Number(nutriscore_score),
                            nutriscore_grade,
                            main_category,
                            image_url
                        });
                    }
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(products);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File|any): Promise<void> {
        const products = await this.loadCategories(file);

        products.map(async (product) => {
            await this.productsRepository.create(product);
        });
    }
}

export { ImportProductUseCase };