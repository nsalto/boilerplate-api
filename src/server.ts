import app from "./index";

import dbConnection from "./database/connection";
import { API_PORT, DATABASE_HOST } from "./config/index";
import logger from "./utils/logger";

dbConnection
    .initialize()
    .then(() => {
        logger.info("[DB] Database initialized!");
        console.log(API_PORT, DATABASE_HOST)
        app.listen(API_PORT, () => {
            logger.info(`[SERVER] running on http://localhost:${API_PORT ?? 5001}`);
        });
    })
    .catch((error) => {
        console.info(DATABASE_HOST)

        logger.error("[SERVER] Could not start the app or connect te db ");
        logger.error(error);
    });
