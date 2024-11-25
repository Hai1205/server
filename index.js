import express from "express";
import dote from "dotenv";

dote.config({ path: ".env" });

const port = 3000;
const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.use("/api/user", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});