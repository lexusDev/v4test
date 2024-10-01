import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { UpdateProductUseCase } from "./UpdateProductUseCase";
import { Status } from "@modules/products/enums/Status";
import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";
import { RetrieveProductUseCase } from "../retrieveProduct/RetrieveProductUseCase";
import { AppError } from "@shared/errors/AppError";

let createProductUseCase: CreateProductUseCase;
let updateProductUseCase: UpdateProductUseCase;
let retrieveProductUseCase :RetrieveProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Deleting product", () => {
    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        updateProductUseCase = new UpdateProductUseCase(productsRepositoryInMemory);
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
        retrieveProductUseCase = new RetrieveProductUseCase(productsRepositoryInMemory);
    });

    it("Should be able to update a product", async () => {
        
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

        await updateProductUseCase.execute(1, {
            brands: "string",
            categories: "string",
            status: Status.PUBLISHED,
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

        const updatedProduct = await retrieveProductUseCase.execute(Number(product.code));

        expect(updatedProduct.status).toBe(Status.PUBLISHED);
    });

    it("Should not be able to update a product", async () => {
        expect(async () => {
            await updateProductUseCase.execute(1, {
                brands: "string",
                categories: "string",
                status: Status.PUBLISHED,
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
        }).rejects.toBeInstanceOf(AppError);
    });
});
