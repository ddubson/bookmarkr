import * as express from "express";
import router from "./Router";

const app = express();
const port = process.env.PORT || "8080";

app.use("/api", router);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
