import { parse } from "csv-parse";
import fs from "fs";

import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { inject, injectable } from "tsyringe";
import { Readable } from "stream";
import { downloadCSV } from "@shared/utils/csv";
import { Status } from "@modules/products/enums/Status";

@injectable()
class ImportProductUrlUseCase {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async loadCategories(stream: Readable): Promise<IProductsDTO[]> {
        return new Promise((resolve, reject) => {
            const parseFile = parse({
                delimiter: '\t',
                columns: true,
                autoParse: true
              });

            stream.pipe(parseFile);
    
            parseFile
                .on("data", async (line) => {
                    console.log("LINE = " + JSON.stringify(line));

                    try {
                        console.log("TESTE 1");
                        const { code, 
                            creator,
                            created_t,
                            last_modified_t,
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
                            serving_quantity,
                            nutriscore_score,
                            nutriscore_grade,
                            main_category,
                            image_url } = line;
                            console.log("TESTE 2");
                            const productExists = await this.productsRepository.exists(code);
                            console.log("TESTE 3");
                            if(productExists) return;
                            console.log("TESTE 4");
                            await this.productsRepository.create({
                                status: Status.DRAFT,
                                imported_t: new Date(),
                                creator,
                                created_t,
                                last_modified_t,
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
                                serving_quantity,
                                nutriscore_score,
                                nutriscore_grade,
                                main_category,
                                image_url
                            });
                            console.log("TESTE 5");
                    } catch (error) {
                        console.error("ERROR = " + error);
                    }                    
                    
                })
                .on("end", () => {
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(fileUrl: string): Promise<void> {
        const csvStream = await downloadCSV(fileUrl);
        await this.loadCategories(csvStream);
    }
}

export { ImportProductUrlUseCase };