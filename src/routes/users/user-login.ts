import { Router } from "express";
import { createPassowrd, createUser, forgotPassword, userLogin, verifyOtp } from "../../controllers/users/users";

const users = Router();

users.post("/v1/users/create-user", createUser);
users.post("/v1/users/verify-otp", verifyOtp);
users.post("/v1/users/create-password", createPassowrd);
users.post("/v1/users/login", userLogin);
users.post("/v1/users/forgot-password", forgotPassword);


export default users;