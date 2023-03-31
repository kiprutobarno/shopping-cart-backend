import User from "../models/User";
const save = async (data) => {
  try {
    return await new User(data).save();
  } catch (error) {
    return error;
  }
};

const readAll = async () => {
  try {
    return { success: true, data: await User.find() };
  } catch (error) {
    return { success: false, error };
  }
};

const readOne = async (username) => {
  try {
    return { success: true, user: await User.findOne({ username }) };
  } catch (error) {
    return { success: false, error };
  }
};

const readOneById = async (id) => {
  try {
    return { success: true, data: await User.findById(id) };
  } catch (error) {
    return { success: false, error };
  }
};

const updateOne = async (id, reqdata) => {
  try {
    return {
      success: true,
      data: await User.findByIdAndUpdate(id, { $set: reqdata }, { new: true }),
    };
  } catch (error) {
    return { success: false, error };
  }
};

const deleteOne = async (id) => {
  try {
    return {
      success: true,
      data: await User.findByIdAndDelete(id),
    };
  } catch (error) {
    return { success: false, error };
  }
};

export { save, readOne, updateOne, deleteOne, readOneById, readAll };
