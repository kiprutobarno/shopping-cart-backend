import "dotenv/config";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

const encrypt = (password) => {
  return CryptoJS.AES.encrypt(password, process.env.PASS_PHRASE).toString();
};

const decrypt = (password) => {
  try {
    return CryptoJS.AES.decrypt(password, process.env.PASS_PHRASE).toString(
      CryptoJS.enc.Utf8
    );
  } catch (error) {
    return error;
  }
};

const generateJwtTokens = (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
  } catch (error) {
    return error;
  }
};

const verifyJwtTokens = (req) => {
  try {
    const authHeader = req.get("Authorization");
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
        if (error) return error;
        req.user = data;
        return { success: true, data: req.user };
      });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
  } catch (error) {
    return { success: false, error };
  }
};

const format = (data) => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not Found");
  }
};

export { encrypt, decrypt, generateJwtTokens, verifyJwtTokens, format };
