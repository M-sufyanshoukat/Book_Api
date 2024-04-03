import express from "express";

import dotenv from "dotenv";
import DB_Config from "./DBConfig.js";
import bookRouter from "./routes/bookRoute.js";

import cors from "cors";
import UserRouter from "./routes/userRoute.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/", bookRouter);
app.use("/", UserRouter);
app.listen(port, (req, res) => {
  console.log("My Server is Runing on" + " " + port);
});

DB_Config();
