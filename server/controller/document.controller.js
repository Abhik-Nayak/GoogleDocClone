import Document from "../models/Document.js";

export const getDocument = async (id) => {
  try {
    if (!id) {
      throw new Error("Document ID is required");
    }

    const document = await Document.findById(id);
    if (document) return document;

    return await Document.create({ _id: id, data: "" });
  } catch (err) {
    console.error("Error in getDocument:", err.message);
    throw err; // rethrow so caller knows it failed
  }
};

export const updateDocument = async (id, data) => {
  try {
    if (!id) {
      throw new Error("Document ID is required");
    }

    return await Document.findByIdAndUpdate(id, { data }, { new: true });
  } catch (err) {
    console.error("Error in updateDocument:", err.message);
    throw err;
  }
};
