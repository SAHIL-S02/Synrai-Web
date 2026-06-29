import express from "express"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"

const app = express();

app.use(morgan());
app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use("/api/auth/", authRouter);

export default app;