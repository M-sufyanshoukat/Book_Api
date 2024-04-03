import express from "express";
import fetchAllBooks from "../controller/bookController.js";

const bookRouter = express.Router();

bookRouter.get('/books', fetchAllBooks);

export default bookRouter;
