import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
});

const Document = mongoose.model('document', DocumentSchema);

export default Document;
