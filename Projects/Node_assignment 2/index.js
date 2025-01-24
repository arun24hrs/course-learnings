// Screenshot Document: https://docs.google.com/document/d/1T-tTULbq5QPcTRmKH6xWsMT0twp2GnET_p4dcO78ip4/edit?usp=sharing

import express from "express";
import User from "./schema/userSchema.js";
import mongoose from "mongoose";

const app = express();

/* // Users dta
let users = [
    { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
    { id: "2", firstName: "Rahul", lastName: "Sharma", hobby: "Gaming" },
    {id: "3", firstName: "Abhishek", lastName: "Gupta", hobby: "COding"}
  ]; */

//   Middlewares
  app.use(express.json());
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  function validateUserFields(req, res, next) {
    const { firstName, lastName, hobby, age } = req.body;
    if (!firstName || !lastName || !hobby || !age) {
      return res.status(400).send({ error: "Missing required fields: firstName, lastName, hobby or age." });
    }
    next();
  }

//   Routes
  app.get("/users", async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
  });

  app.get("/users/:id", async(req, res) => {
    try {
      const {id}=req.params
      const user =await User.findById(id);
      if (!user) {
         res.status(404).send({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
       res.status(500).send({ message: error.message });
      
    }
 
  });

  app.post("/user",validateUserFields, async(req, res) => {
    const { firstName, lastName, hobby, age } = req.body;
    if ( !firstName || !lastName || !hobby || !age) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newUser = new User({ firstName, lastName, hobby, age });
    newUser.save();
    // users.push(newUser);
    res.status(201).json(newUser);
  });

  app.put("/user/:id", validateUserFields, async(req, res) => {
    try {
      const { firstName, lastName, hobby, age } = req.body;
      const {id}=req.params
      const userIndex = await User.findById(id);
      if (!userIndex) {
        return res.status(404).send({ message: "User not found" });
      }
      userIndex.firstName=firstName||userIndex.firstName
      userIndex.lastName=lastName||userIndex.lastName
      userIndex.age=age||userIndex.age
      userIndex.hobby=hobby|| userIndex.hobby

      await userIndex.save();
      res.status(200).json(userIndex);
    } catch (error) {
      res.status(500).send({ message:error.message});
    }

  });

  app.delete("/user/:id", async (req, res) => {
    const {id} = req.params;
    try {
      
        const userIndex = await User.findByIdAndDelete(id);
        console.log(userIndex);
    if (!userIndex ) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted", user:`deleted ${id} user` });
    } catch (error) {
      res.status(500).send({ message: error.message});
    }
  
  });

  // Server
  app.listen(8080, () => {
    console.log(`Server running on http://localhost:8080`);
  });

  mongoose.connect('mongodb://localhost:27017/users');
  const db = mongoose.connection;

  db.on("open", ()=>{
    console.log("Connect to DB!")
  });

  db.on("error", ()=>{
    console.log("Error connecting to the DB!")
  })