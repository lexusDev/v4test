import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";


import "reflect-metadata";

import { router } from "@shared/infra/http/routes";
import { AppError } from "@shared/errors/AppError";

import swaggerFile from "../../../../swagger.json";


const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);




export { app };
