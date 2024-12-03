import express from "express";
import dotenv from "dotenv";
import router from "./routes/Routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())
app.use("/",router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
