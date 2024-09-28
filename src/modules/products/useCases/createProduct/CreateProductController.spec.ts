import request from "supertest";

import { app } from "@shared/infra/http/app";
import { Status } from "@modules/products/enums/Status";

describe("Create Category Controller", () => {

  it("Should be able to create a new product ", async () => {
    const response = await request(app).post("/products").send({
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

    console.log("BODY = " + JSON.stringify(response))

    expect(response.status).toBe(201);
  });
});