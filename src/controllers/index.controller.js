import User from "../models/user.model.js";

export const index = (_, res) => {
  res.redirect("/register");
};

export const register = (_, res) =>
  res.status(200).render("register.ejs", null);

export const login = (_, res) => {
  res.status(200).render("login.ejs", null);
};

export const error = (req, res) => {
  const { error } = req.query;
  res.render("error.ejs", { error });
};

export const getUsers = async (req, res) => {
  const { username } = req.query;
  try {
    const users = await User.find(username ? { username } : {});
    if (users.length > 0) return res.json(users);
    res.json("No Users");
  } catch (error) {
    res.status(500).redirect(`/error?error=${error}`);
  }
};

export const postUsers = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).redirect(`/error?error=${error}`);
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
  } catch (error) {
    res.status(500).redirect(`/error?error=${error}`);
  }
};

export const deleteUsers = async (req, res) => {
  const { username } = req.body;
  try {
    const usersToDelete = await User.find({ username });
    if (usersToDelete.length < 1) return res.json("Users not found");
    await User.deleteMany({ username });
    res.json(usersToDelete);
  } catch (error) {
    res.status(500).redirect(`/error?error=${error}`);
  }
};
