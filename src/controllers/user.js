import { deleteOne, readAll, readOneById, updateOne } from "../services/users";
import { encrypt } from "../utils";

const updateUser = async (req, res) => {
  req.body.password = encrypt(req.body.password);
  const user = await updateOne(req.params.id, req.body);
  res.status(200).send(user);
};

const getUserById = async (req, res) => {
  const user = await readOneById(req.params.id);
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  const user = await deleteOne(req.body._id);
  res.send(200).send(user);
};

const getUsers = async (req, res) => {
  const users = await readAll();
  res.status(200).send(users);
};

export { updateUser, deleteUser, getUserById, getUsers };
