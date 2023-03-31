import {
  readOneById,
  save,
  updateOne,
  readAll,
  deleteOne,
} from "../services/products";

const createProduct = async (req, res) => {
  const products = await save(req.body);
  return res.status(201).send(products);
};

const getProductById = async (req, res) => {
  const product = await readOneById(req.params.id);
  console.log(product);
  res.status(200).send(product);
};

const getProducts = async (req, res) => {
  const qCat = req.query.category;
  const qNew = req.query.new;
  const products = await readAll(qNew, qCat);
  res.status(200).send(products);
};

const updateProduct = async (req, res) => {
  const product = await updateOne(req.params.id, req.body);
  res.status(200).send(product);
};

const deleteProduct = async (req, res) => {
  const product = await deleteOne(req.params.id);
  res.status(200).send(product);
};

export {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getProducts,
};
