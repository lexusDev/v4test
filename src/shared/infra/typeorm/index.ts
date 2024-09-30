import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "@modules/products/infra/typeorm/entities/Product";

const AppDataSource = new DataSource({
        type: "mysql",
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database:  process.env.NODE_ENV === 'test' ? "v4test_test" : "v4test",
        entities: [Product],
        synchronize: true,
        logging: false,
        migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    });

export { AppDataSource };