const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/recipes", recipeRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Recipe API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
