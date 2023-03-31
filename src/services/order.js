import Order from "../models/Order";

const save = async (data) => {
  try {
    return { success: true, data: await new Order(data).save() };
  } catch (error) {
    return { success: false, error };
  }
};

const readAll = async () => {
  try {
    const orders = await Order.find();
    return { success: true, data: orders };
  } catch (error) {
    return { success: false, error };
  }
};

const readOneById = async (id) => {
  try {
    return { success: true, data: await Order.find({ id }) };
  } catch (error) {
    return { success: false, error };
  }
};

const updateOne = async (id, reqdata) => {
  try {
    return {
      success: true,
      data: await Order.findByIdAndUpdate(id, { $set: reqdata }, { new: true }),
    };
  } catch (error) {
    return { success: false, error };
  }
};

const deleteOne = async (id) => {
  try {
    return {
      success: true,
      data: await Order.findByIdAndDelete(id),
    };
  } catch (error) {
    return { success: false, error };
  }
};

export { save, updateOne, deleteOne, readOneById, readAll };
