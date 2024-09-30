import cron from "node-cron";

import { app } from "./app";
import cronCSV from "../jobs/cronJob";


app.listen(3333, () => console.log("Server is on!"));
cron.schedule('* 57 22 * * * *', cronCSV);
