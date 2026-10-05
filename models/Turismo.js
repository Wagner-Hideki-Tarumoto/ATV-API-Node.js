import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  titulo: String,
  tipo: String,
  nomeFicticio: String
});

const turismoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  pais: String,
  cidade: String,
  endereco: String,
  referencia: String,
  fonte: String,
  media: [mediaSchema]
});

export default mongoose.model("Turismo", turismoSchema);