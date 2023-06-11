import User from "../models/user.model.js";

export const index = (_, res) => {
  res.redirect("/register");
};

export const register = (_, res) =>
  res.status(200).render("register.ejs", null);

export const login = (_, res) => {
  res.status(200).render("login.ejs", null);
};

export const getUsers = async (req, res) => {
  const { username } = req.query;
  try {
    const users = await User.find(username ? { username } : {});
    if (users.length > 0) return res.json(users);
    res.json("No Users");
  } catch (err) {
    res.json(err);
  }
};

export const postUsers = async (req, res) => {
  const inputsValueArr = Object.values(req.body);
  if (inputsValueArr.includes(""))
    return res.status(500).json("Empty fields are note allow");
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const patchUsers = async (req, res) => {
  // finds, updates and saves the query matching documents
  const { username, newUsername } = req.body;
  try {
    const usersToUpdate = await User.find({ username });
    usersToUpdate.forEach((eachUser) => {
      eachUser.username = newUsername;
      eachUser.save();
    });
    res.json(usersToUpdate);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const deleteUsers = async (req, res) => {
  const { username } = req.body;
  try {
    const usersToDelete = await User.find({ username });
    if (usersToDelete.length < 1) return res.json("Users not found");
    await User.deleteMany({ username });
    res.json(usersToDelete);
  } catch (err) {
    console.log(err);
    res.json("an error happens");
  }
};
