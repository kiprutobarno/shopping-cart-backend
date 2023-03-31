import Cart from "../models/Cart";

const save = async (data) => {
  try {
    return { success: true, data: await new Cart(data).save() };
  } catch (error) {
    return { success: false, error };
  }
};

const readAll = async () => {
  try {
    const carts = await Cart.find();
    return { success: true, data: carts };
  } catch (error) {
    return { success: false, error };
  }
};

const readOneById = async (id) => {
  try {
    return { success: true, data: await Cart.findOne({ id }) };
  } catch (error) {
    return { success: false, error };
  }
};

const updateOne = async (id, reqdata) => {
  try {
    return {
      success: true,
      data: await Cart.findByIdAndUpdate(id, { $set: reqdata }, { new: true }),
    };
  } catch (error) {
    return { success: false, error };
  }
};

const deleteOne = async (id) => {
  try {
    return {
      success: true,
      data: await Cart.findByIdAndDelete(id),
    };
  } catch (error) {
    return { success: false, error };
  }
};

export { save, updateOne, deleteOne, readOneById, readAll };
