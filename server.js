const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const { errorHandler } = require("./middleware/errorHandler");

dotenv.config();
connectDB();

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
  })
);

app.use(express.json());

// ✅ Define routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// ✅ Default test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
