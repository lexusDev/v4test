import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";


import "reflect-metadata";
import "@shared/container";

import { router } from "@shared/infra/http/routes";
import { errorHandler } from "@shared/infra/http/middlewares/errorHandler";

import swaggerFile from "../../../../docs/openapi.json";
import { AppDataSource } from "@shared/infra/typeorm";

if (process.env.NODE_ENV !== 'test') AppDataSource.initialize();

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.get("/healthz", (req, res) => {
    res.json({health: "Ok!"});
});

app.use(errorHandler);

export { app };