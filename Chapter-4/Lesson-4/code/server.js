// nodejs server
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.method); //https
//   //   if (req.method == "GET") {
//   //   }
//   //   if (req.method == "POST") {
//   //   }
//   res.end("end");
// });

// server.listen(3000, () => {
//   console.log("server is listening at post 3000");
// });

//express
const express = require("express");
const app = express();

app.use(express.json()); //middleware

app.listen(3000, () => {
  console.log("application is running at 3000");
});

// in real time, this data will come from DB
const person = [
  {
    name: "alina",
    age: "20",
    city: "Mumbai",
    salary: 80909,
    id: 1,
  },
  {
    name: "alex",
    age: "24",
    city: "Pune",
    salary: 8989989,
    id: 2,
  },
];

// creating api
//syntax
// app.method("path", callback func)
app.get("/employees", (req, res) => {
  res.status(200).json({ data: person });
  //   res.status(404).json({ data: person }); //
});

// get a specific employee data
app.get("/employees/:id", (req, res) => {
  let id = req.params.id; //

  let employee = person.find((emp) => emp.id == id);
  if (employee) {
    res.status(200).json({ employee });
  } else {
    res.status(404).json({ message: "employee not found" });
  }
});

// app.post("/employees", (req, res) => {
//   console.log(req.body);
//   //push data to person
//   res.send("ok");
// });

app.delete("/employee/:id", () => {
  // find object to be delete
  // delete(splice) and simply send update data
});

// Task
// delete

app.post("/employees", (req, res) => {
  console.log(req.body);
  let emp = req.body;
  for (const key in emp) {
    if (
      key == "name" ||
      key == "age" ||
      key == "salary" ||
      key == "city" ||
      key == "id"
    ) {
      continue;
    } else {
      res.status(400).json({ message: "bad request happened" });
    }
  }

  person.push(emp);
  res.status(201).json({ data: emp });
});

// updation
// put -> delete complete object and add new updated object
app.put("/employees/:id", (req, res) => {
  let employee = req.body;
  let id = req.params.id;

  person.splice(
    person.findIndex((e) => e.id == id),
    1
  );
  person.push(employee);
  res.status(200).json({ data: employee });
});

// app.patch("/employees/:id", (req, res) => {
//   let employee = req.body;
//   let id = req.params.id;

//   //find the object to be updated and update in person object
//   res.status(200).json({ data: employee });
// });

// Task
// Create CRUD APIS'

// data of products
// {
// productName,
// ProductId,
// Discount Price
// Original Price
// image: "link",
// productCategory
// }
