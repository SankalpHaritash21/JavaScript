import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("TEST");
  res.send("hi");
});

app.use("/users", usersRoutes);

app.listen(PORT, () => console.log(`Server Running on PORT:${PORT}`));
