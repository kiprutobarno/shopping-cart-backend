import jwt from "jsonwebtoken";
import { verifyJwtTokens } from "../utils";

const verifyToken = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
      if (error) res.status(403).json({ message: "Invalid Token!" });
      req.user = payload;
      next();
    });
  } else {
    res.status(401).json({ message: "Not Authorized" });
  }
};

const verifyTokenAndAuthorize = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user) {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).send({ message: "Not Authorized" });
      }
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send({ message: "Not Authorized" });
    }
  });
};

export { verifyTokenAndAuthorize, verifyToken, verifyTokenAndAdmin };
