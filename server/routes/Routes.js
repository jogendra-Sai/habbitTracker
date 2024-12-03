import express, { Router } from "express";
const router = express.Router();

router.get("http://localhost:5000/habits/fetchHabits", async (req, res) => {
  console.log("coming here")
  res.json({
    message: "success",
    data: [
      {
        id: "1",
        name: "Read",
        frequency: "daily",
        completedDates: [],
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Excercise",
        frequency: "daily",
        completedDates: [],
        createdAt: new Date().toISOString(),
      },
    ],
  });
});
export default router