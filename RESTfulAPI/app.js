import express from "express";
import bodyParser from "body-parser";

import connectMongoDB from "./db/mongo.js";

import usersRoutes from "./routers/users.js";

// importing an express application
const app = express();
// Define the port on which the server will listen
const PORT = 8080;

// Middleware: Use bodyParser to parse JSON requests
app.use(bodyParser.json());

// Middleware: Use the usersRoutes for requests starting with "/users"
app.use("/users", usersRoutes);

// Define route to the home page and output simple message in there
app.get("/", (req, res) => res.send("Hello from home page"));

// Connect to the mongo database
connectMongoDB();

// Start the server, listening on the specified port
app.listen(PORT, () => console.log(`Server runs on port http://localhost:${PORT}`));
