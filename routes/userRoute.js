

import express from "express";
import { Login, SignUp } from "../controller/useController.js";


const UserRouter = express.Router();

UserRouter.post('/signup', SignUp);
UserRouter.post("/login" ,Login)

export default UserRouter;
