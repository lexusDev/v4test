import request from "supertest";

import { app } from "@shared/infra/http/app";
import { Status } from "@modules/products/enums/Status"; 
import { AppDataSource } from "@shared/infra/typeorm";
import { Product } from "@modules/products/infra/typeorm/entities/Product";



describe("Create Category Controller", () => {

  beforeAll(async () => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  })

  afterAll(async () => {
    await AppDataSource.getRepository(Product).clear(); // Clear the products table
    await AppDataSource.destroy(); // Close the connection
  });

  it("Should be able to list products ", async () => {
    await request(app).post("/products").send({
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

    const response = await request(app).get("/products").send();

    expect(response.status).toBe(200);
  });
});