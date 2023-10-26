import express from "express";
import mongoose from "mongoose";
import Users from "./models/users.model.js";
import "dotenv/config";

const app = express();

app.use(express.json());

const port = process.env.PORT;
// Connection URL

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_KEY, {
      useNewUrlParser: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Test Page");
});

app.post("/register", async (req, res) => {
  const { name, age } = req.body;
  const newUsers = new Users({
    name,
    age,
  });

  await newUsers.save();

  res.status(200).send({
    ok: true,
    message: "User has been added successfully",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
