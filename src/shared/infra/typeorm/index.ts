import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "../../modules/products/infra/typeorm/entities/Product";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [Product],
    synchronize: true,
    logging: false,
});

export { AppDataSource };