import mongoose from "mongoose";

const { Schema, model } = mongoose;

const bookSchema = new Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: true,
  },
  editora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "editoras",
    required: true,
  },
  numeroPaginas: { type: Number },
});

const books = model("livros", bookSchema);

export default books;