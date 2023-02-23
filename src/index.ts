import express from "express";
import cors from "cors";
import handleError from "./middlewares/error";
import router from "./routes/index";

const app = express();

// Middlewares
app.use(cors());

app.use(
    express.urlencoded({
        limit: "5mb",
        parameterLimit: 100000,
        extended: false,
    })
);

app.use(
    express.json({
        limit: "5mb",
    })
);

app.use("/", router);

app.use(handleError);

export default app;
