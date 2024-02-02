import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User ${user.firstName} added`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} is deleted from the db`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const userToUpdate = users.find((user) => user.id === id);

  const { firstName, lastName, age } = req.body;

  if (firstName) {
    userToUpdate.firstName = firstName;
  }

  if (lastName) {
    userToUpdate.lastName = lastName;
  }

  if (age) {
    userToUpdate.age = age;
  }

  res.send("Changes are successful!");
};
