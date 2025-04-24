const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Application is running at 3000");
});

//In real time, this data will come from DB, for now I am creating it
const person = [
  { id: 2, name: "Alina", age: 20, city: "Mumbai", salary: 20000 },
  {
    id: 1,
    name: "Alaya",
    age: 23,
    city: "Banglore",
    salary: 24000,
  },
];

app.get("/", (req, res) => {
  res.status(200).json({ name: "alina" });
});

app.get("/employees", (req, res) => {
  res.status(200).json({ data: person });
});

app.get("/customer", (req, res) => {
  res.status(200).json({ data: "hi" });
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id;

  let employee = person.find((e) => (e.id = id));

  if (employee) {
    res.status(200).json({ employee });
  } else {
    res.status(404).json({ message: "not exist" });
  }
});
