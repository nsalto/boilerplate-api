import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";

import routes from "./routes/index";
import handleError from "./middlewares/error";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());

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

/* app.use(
    session({
        secret: process.env.SESSION_SECRET!,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Configurar rutas
app.get("/", (req, res) => {
    res.send("¡La aplicación está funcionando correctamente!");
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    res.redirect("/");
}); */

app.use("/api", routes);

app.use(handleError);

export default app;
