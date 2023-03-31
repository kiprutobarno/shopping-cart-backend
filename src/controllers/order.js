import {
  readOneById,
  save,
  updateOne,
  readAll,
  deleteOne,
} from "../services/order";

const createOrder = async (req, res) => {
  const order = await save(req.body);
  return res.status(201).send(order);
};

const getOrderByUserId = async (req, res) => {
  const order = await readOneById(req.params.id);
  res.status(200).send(order);
};

const getOrders = async (req, res) => {
  const orders = await readAll();
  res.status(200).send(orders);
};

const updateOrder = async (req, res) => {
  const order = await updateOne(req.params.id, req.body);
  res.status(200).send(order);
};

const deleteOrder = async (req, res) => {
  const order = await deleteOne(req.params.id);
  res.status(200).send(order);
};

export { createOrder, updateOrder, deleteOrder, getOrderByUserId, getOrders };
