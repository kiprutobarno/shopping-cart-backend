import { getIncome } from "../services/income";

const generateIncome = async (req, res) => {
  const income = await getIncome();
  return res.status(200).send({ income });
};

export default generateIncome;
