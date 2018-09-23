import {Express} from "express";
import InMemoryBookRepository from "./books/InMemoryBookRepository";

export const bookRepository = InMemoryBookRepository.createRepository();

export const allowCrossOriginHeaders = (app: Express): void => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
};
