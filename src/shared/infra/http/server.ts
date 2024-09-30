import cron from "node-cron";

import { app } from "./app";
import cronCSV from "../jobs/cronJob";


app.listen(process.env.PORT || 3333, () => console.log("Server is on!"));
cron.schedule(String(process.env.CRONJOB_REGEX), cronCSV);
