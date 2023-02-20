import { Router } from "express";
import { authenticateUser } from "../../middlewares/auth";
const businessRoutes = Router();

businessRoutes.get("/", authenticateUser, (req, res) => {
    console.log("asdasdsadasd");
});

export default businessRoutes;
