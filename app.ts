import express from "express";
import { Request, Response, NextFunction, Router } from "express";

const app = express();
const router = Router();
const path = __dirname + "/views/";

const PORT = 3000;
const HOST = "0.0.0.0";

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("/" + req.method);
  next();
});

router.get("/", (req: Request, res: Response) => {
  res.sendFile(path + "index.html");
});

router.get("/sharks", (req: Request, res: Response) => {
  res.sendFile(path + "sharks.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});