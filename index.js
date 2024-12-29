const express = require("express");
const connectDB = require("./config/dbConnnection");
require("dotenv").config();
const weatherRouter = require("./router/weatherRouter");
const stockRouter = require("./router/finanaceRouter");
const authRouter = require("./router/authRouter");
const stockmodificationRouter = require("./router/stockmodifyingRouter");
const weathermodificationRouter = require("./router/weatherModifyingRouter");
const authMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();
app.use(bodyParser.json());

// Routes
app.use("/api", userActivityRoutes);
app.use("/api", salesRoutes);
app.use("/api", dashboardRoutes);
app.use("/api", userRoutes);

// Start the server

app.get("/", (req, res) => {
  res.send("Backend Working ON Port 3000");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
