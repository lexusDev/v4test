import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "@modules/products/infra/typeorm/entities/Product";

const AppDataSource = new DataSource({
        type: "postgres",
        host: process.env.PG_HOST,
        port: Number(process.env.PG_PORT),
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database:  process.env.NODE_ENV === 'test' ? "v4test_test" : "v4test",
        entities: [Product],
        synchronize: true,
        logging: false,
        migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    });

export { AppDataSource };