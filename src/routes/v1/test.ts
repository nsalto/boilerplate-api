import { Router } from "express";
import { authenticateUser } from "../../middlewares/auth";
import { register } from "../../controllers/authController";

const router = Router();

router.get("/", authenticateUser, (req, res) => {
    console.log("asdasdsadasd");
});

router.post("/register", register)

export default router;
