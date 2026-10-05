import Turismo from "../models/Turismo.js";

export default {
  async Create(nome, descricao, pais, cidade, endereco, referencia, fonte, media) {
    return await Turismo.create({ nome, descricao, pais, cidade, endereco, referencia, fonte, media });
  },
  async GetAll() { return await Turismo.find(); },
  async getOne(id) { return await Turismo.findById(id); },
  async Update(id, nome, descricao, pais, cidade, endereco, referencia, fonte, media) {
    return await Turismo.findByIdAndUpdate(
      id,
      { nome, descricao, pais, cidade, endereco, referencia, fonte, media },
      { new: true, runValidators: true }
    );
  },
  async Delete(id) { return await Turismo.findByIdAndDelete(id); }
};