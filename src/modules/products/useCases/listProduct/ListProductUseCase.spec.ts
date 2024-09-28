import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { Status } from "@modules/products/enums/Status";
import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";
import { ListProductUseCase } from "./ListProductUseCase";

let createProductUseCase: CreateProductUseCase;
let listProductUseCase :ListProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Retrieving product", () => {
    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
        listProductUseCase = new ListProductUseCase(productsRepositoryInMemory);
    });

    it("Should be able to retrieve a product by code", async () => {
        
        await createProductUseCase.execute({
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

        const retrievedProduct = await listProductUseCase.execute(1, 10);

        expect(retrievedProduct[0]).toHaveProperty("code");
    });
});
