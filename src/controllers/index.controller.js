import mongoose from "mongoose";
import User from "../models/user.model.js";

export const indexPage = (_, res) => {
  res.status(200).render("index.ejs", null);
};

export const register = (req, res) => {
  res.json(req.body);
  // res.redirect("/#");
  // const newUser = new User(req.body);
  // newUser.save();
  // res.status(200).json(newUser);
};

export const users = async (req, res) => {
  try {
    const { userName } = req.query;
    const users = await mongoose.model("User", "users").find();
    if (!userName) return res.status(200).json(users);
    const userNameUsers = users.filter((eachUser) => {
      return eachUser.name === userName;
    });
    if (userNameUsers.length > 0) return res.status(200).json(userNameUsers);
    res.status(200).json("No Users");
  } catch (err) {
    res.json(err);
  }
};

export const deleteController = async (req, res) => {
  const { userName } = req.query;
  try {
    await mongoose.model("User", "users").deleteMany({ name: userName });
    res.json("user deleted");
  } catch (err) {
    console.log(err);
    res.json("an error happens");
  }
};
