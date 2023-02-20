import { Strategy } from "passport-local";
import dbConnection from "database/connection";
import { compareSync } from "bcrypt";

export const localStrategy = new Strategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async (email, password, done) => {
        const userRepository = dbConnection.getRepository("User");
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            return done(null, false, { message: "Invalid email" });
        }

        if (!compareSync(password, user.password)) {
            return done(null, false, { message: "Invalid password" });
        }

        return done(null, user);
    }
);
    