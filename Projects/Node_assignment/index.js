// Screenshot Document: https://docs.google.com/document/d/1U9kvwAOVXS_8amBORP_UQephNEEn4pnnIflOeKXrlYU/edit?usp=sharing

import express from "express";

const app = express();

// Users dta
let users = [
    { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
    { id: "2", firstName: "Rahul", lastName: "Sharma", hobby: "Gaming" },
    {id: "3", firstName: "Abhishek", lastName: "Gupta", hobby: "COding"}
  ];

//   Middlewares
  app.use(express.json());
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  function validateUserFields(req, res, next) {
    const { firstName, lastName, hobby } = req.body;
    if (!firstName || !lastName || !hobby) {
      return res.status(400).send({ error: "Missing required fields: firstName, lastName, or hobby." });
    }
    next();
  }

//   Routes
  app.get("/users", (req, res) => {
    res.status(200).send(users);
  });

  app.get("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).json(user);
  });

  app.post("/user", (req, res) => {
    const { id, firstName, lastName, hobby } = req.body;
    if (!id || !firstName || !lastName || !hobby) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newUser = { id, firstName, lastName, hobby };
    users.push(newUser);
    res.status(201).json(newUser);
  });

  app.put("/user/:id", (req, res) => {
    const { firstName, lastName, hobby } = req.body;
    const userIndex = users.findIndex((u) => u.id === req.params.id);
    if (userIndex < 0) {
      return res.status(404).send({ message: "User not found" });
    }
    if (!firstName || !lastName || !hobby) {
      return res.status(400).send({ message: "All fields are required" });
    }
    users[userIndex] = { ...users[userIndex], firstName, lastName, hobby };
    res.status(200).json(users[userIndex]);
  });

  app.delete("/user/:id", (req, res) => {
    const userIndex = users.findIndex((u) => u.id === req.params.id);
    if (userIndex < 0 ) {
      return res.status(404).send({ message: "User not found" });
    }
    const deletedUser = users.filter((u)=> u.id != req.params.id);
    res.status(200).json({ message: "User deleted", user: deletedUser });
  });

  Server
  app.listen(8080, () => {
    console.log(`Server running on http://localhost:8080`);
  });