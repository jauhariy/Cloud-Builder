import express from "express";

import { createUser, getUser, deleteUser, updateUser, getAllUsers } from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
// get /users - find all users
router.get("/", getAllUsers);

// post /users - create a user
router.post("/", createUser);

// get /user/:id - finds user details
router.get("/:id", getUser);

// delete /user/:id - deletes a user
router.delete("/:id", deleteUser);

// patch /user/:id - updates a user
router.patch("/:id", updateUser);

export default router;
