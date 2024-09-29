import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportProductUseCase } from "./ImportProductUseCase";

export default class ImportProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importProductUseCase = container.resolve(ImportProductUseCase);

        await importProductUseCase.execute(file);

        return response.status(201).send();
    }
}