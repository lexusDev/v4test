import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { Status } from "@modules/products/enums/Status";
import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";
import { RetrieveProductUseCase } from "./RetrieveProductUseCase";
import { AppError } from "@shared/errors/AppError";

let createProductUseCase: CreateProductUseCase;
let retrieveProductUseCase :RetrieveProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Retrieving product", () => {
    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
        retrieveProductUseCase = new RetrieveProductUseCase(productsRepositoryInMemory);
    });

    it("Should be able to retrieve a product by code", async () => {
        
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

        const retrievedProduct = await retrieveProductUseCase.execute(Number(product.code));

        expect(retrievedProduct).toHaveProperty("code");
    });

    it("Should not be able to retrieve a product from unexistent code", async () => {
        expect(async () => {
            await retrieveProductUseCase.execute(1);
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to retrive a product from invalid value", async () => {
        expect(async () => {
            await retrieveProductUseCase.execute(Number("asd"));
        }).rejects.toBeInstanceOf(AppError);
    });
});
