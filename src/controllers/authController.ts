import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { User } from "../entities/User.entity";
import { compareSync, hashSync } from "bcrypt";
import dbConnection from "../database/connection";

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userRepository = dbConnection.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
        return res.status(401).json({ message: "Invalid email" });
    }

    if (!compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    return res.status(200).json({ token });
};

const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userRepository = dbConnection.getRepository(User);
    const existingUser = await userRepository.findOne({ where: { email } });

    if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
    }

    const hashedPassword = hashSync(password, 10);

    const newUser = userRepository.create({ email, password: hashedPassword });
    await userRepository.save(newUser);

    const token = sign({ id: newUser.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    return res.status(201).json({ token });
};

export { login, register };
