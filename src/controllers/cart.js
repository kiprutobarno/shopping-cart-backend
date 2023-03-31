import {
  readOneById,
  save,
  updateOne,
  readAll,
  deleteOne,
} from "../services/cart";

const createCart = async (req, res) => {
  const cart = await save(req.body);
  return res.status(201).send(cart);
};

const getCartByUserId = async (req, res) => {
  const cart = await readOneById(req.params.userId);
  res.status(200).send(cart);
};

const getCarts = async (req, res) => {
  const cart = await readAll();
  res.status(200).send(cart);
};

const updateCart = async (req, res) => {
  const cart = await updateOne(req.params.id, req.body);
  res.status(200).send(cart);
};

const deleteCart = async (req, res) => {
  const cart = await deleteOne(req.params.id);
  res.status(200).send(cart);
};

export { createCart, updateCart, deleteCart, getCartByUserId, getCarts };
