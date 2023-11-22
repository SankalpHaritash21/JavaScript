import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  {
    fname: "A",
    lname: "B",
    age: "21",
  },
  {
    fname: "C",
    lname: "D",
    age: "20",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("Post Route Reached");
  const u = req.body;
  users.push({ ...u, id: uuidv4() });
  res.send("Post Route Reached");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get ID Route ${id}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with id ${id} DELETED from database`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { fname, lname, age } = req.body;

  const update = users.find((u) => u.id === id);
  if (fname) update.fname = fname;
  if (lname) update.lname = lname;
  if (age) update.age = age;

  res.send(" user updated");
});

export default router;
