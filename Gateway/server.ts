import express from "express";
import logger from "morgan";
import helmet from "helmet";
import httpProxy from "express-http-proxy";
import Log from 'node-color-log'

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  return response.send("OK");
});

app.use("/student-status", httpProxy("http://studentaverage:4000", { timeout: 3000 }));
app.use("/students", httpProxy("http://student:3366", { timeout: 3000 }));

app.listen(3000, () => Log.info("API student rodando"));
