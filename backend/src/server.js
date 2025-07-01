import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // Get the current directory name

// Middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173", // Allow requests from the frontend
    })
  );
}

app.use(express.json()); // Parse JSON bodies
app.use(rateLimiter);

// app.use((req, res, next) => {
//   // Middleware to log requests
//   console.log(`${req.method} request for '${req.url}'`);
//   next();
// });

// Master Routes
app.use("/api/notes", notesRoutes);

// Serve static files from the frontend build directory (Deployment)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Serve the index.html file for any other routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// Once the database is connected, start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
