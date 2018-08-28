import {Request, Response, Router} from "express";

const router = Router();

router.route("/books").get((req: Request, res: Response) => {
  res.json([]);
});

export default router;