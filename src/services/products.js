import Product from "../models/Product";

const save = async (data) => {
  try {
    return { success: true, data: await new Product(data).save() };
  } catch (error) {
    return { success: false, error };
  }
};

const readAll = async (qnew, qcategory) => {
  try {
    let products;
    if (qnew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    }
    if (qcategory) {
      products = await Product.find({ categories: { $in: [qcategory] } });
    } else {
      products = await Product.find();
    }
    return { success: true, data: products };
  } catch (error) {
    return { success: false, error };
  }
};

const readOneById = async (id) => {
  try {
    return { success: true, data: await Product.findById(id) };
  } catch (error) {
    return { success: false, error };
  }
};

const updateOne = async (id, reqdata) => {
  try {
    return {
      success: true,
      data: await Product.findByIdAndUpdate(
        id,
        { $set: reqdata },
        { new: true }
      ),
    };
  } catch (error) {
    return { success: false, error };
  }
};

const deleteOne = async (id) => {
  try {
    return {
      success: true,
      data: await Product.findByIdAndDelete(id),
    };
  } catch (error) {
    return { success: false, error };
  }
};

export { save, updateOne, deleteOne, readOneById, readAll };
