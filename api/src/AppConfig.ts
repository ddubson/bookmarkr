import {Express} from "express";
import PostgreBookRepository from "./books/PostgreBookRepository";

import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

export const bookRepository = PostgreBookRepository.createRepository();

export const allowCrossOriginHeaders = (app: Express): void => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
};
