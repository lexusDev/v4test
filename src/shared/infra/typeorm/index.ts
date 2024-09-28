import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "@modules/products/infra/typeorm/entities/Product";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "v7A117o%",
    database: "v4test",
    entities: [Product],
    synchronize: true,
    logging: false,
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});

export { AppDataSource };