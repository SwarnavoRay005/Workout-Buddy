import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import workoutRoutes from "./routes/workout.routes.js";
import userRouters from "./routes/user.routes.js";
import { connectDB } from "./config/db.config.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRouters);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running successfully");
  });
});
