const uuid = require("uuid");

function generateId() {
  return uuid.v4();
}

const allUsers = [];

const defaultUsers = [
  { id: generateId(), name: "John Doe", password: "password" },
  {
    id: generateId(),
    name: "Doe John",
    password: "password",
  },
];
defaultUsers.forEach((user) => allUsers.push(user));

function getAllUsers() {
  return allUsers;
}

function insert(user) {
  user.user_id = generateId();
  allUsers.push(user);
  return user;
}

function findUser(username, password) {
  let existUser = allUsers.find(
    (x) => x.username == username && x.password == password
  );
  return Promise.resolve(existUser);
}


module.exports = {
  getAllUsers,
  insert,
  findUser,
};
