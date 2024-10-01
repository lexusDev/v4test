import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { Status } from "@modules/products/enums/Status";


let createProductUseCase: CreateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Creating product", () => {
    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
    });

    it("Should be able to create a new product", async () => {
        const product = await createProductUseCase.execute({
            brands: "string",
            categories: "string",
            status: Status.DRAFT,
            imported_t: new Date(),
            url: "string",
            creator: "string",
            created_t: 0,
            last_modified_t: 0,
            product_name: "string",
            quantity: "string",
            labels: "string",
            cities: "string",
            purchase_places: "string",
            stores: "",
            ingredients_text: "string",
            traces: "string",
            serving_size: "string",
            serving_quantity: 0,
            nutriscore_score: 0,
            nutriscore_grade: "string",
            main_category: "string",
            image_url: "string"
        });

        expect(product).toHaveProperty("brands");
    });
});
