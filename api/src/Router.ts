import {Request, Response, Router} from "express";
import {bookRepository} from "./AppConfig";

const router = Router();

router.route("/books").get((req: Request, res: Response) => {
  res.json(bookRepository.fetchAll());
});

export default router;