import "dotenv/config";
import CryptoJS from "crypto-js";
import { readOne, save } from "../services/users";
import { decrypt, encrypt, format, generateJwtTokens } from "../utils";

const createUser = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;
  const data = await save({
    username,
    email,
    isAdmin,
    password: encrypt(password),
  });
  console.log(data);
  return res.status(201).send({ data });
};

const userLogin = async (req, res) => {
  const { user, success } = await readOne(req.body.username);
  const { password, ...others } = user;

  if (req.body.password !== decrypt(user.password)) {
    return res.status(401).send({ code: 401, message: "Wrong Credentials" });
  }

  const token = generateJwtTokens({
    id: user._id,
    isAdmin: user.isAdmin,
  });

  const results = format({
    id: user._id,
    user: user.username,
    token,
  });

  return res.status(200).send({ success, data: results.data });
};

export { createUser, userLogin };
