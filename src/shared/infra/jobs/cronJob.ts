import { ImportProductUrlUseCase } from "@modules/products/useCases/importProduct/ImportProductUrlUseCase";
import { container } from "tsyringe";

export default async function cronCSV () {
    const importProductUrlUseCase = container.resolve(ImportProductUrlUseCase);

    try {
        await importProductUrlUseCase.execute(String(process.env.CRONJOB_URL));
    } catch (error) {
        console.error('Error downloading CSV:', error);
    }
}