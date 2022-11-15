// NODE_MODULES
require("dotenv").config();
const port = process.env.PORT;
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");

// LOCAL IMPORT
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const errorMiddleware = require("./middleware/error");

// create an express app
const app = express();
connectDB(); // connect to mongoDB

// secure app
app.use(helmet());
app.use(cors({ origin: "*" }));

// call other middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use(errorMiddleware);

app.listen(port, () => console.log(`Listening on port ${port}`));
