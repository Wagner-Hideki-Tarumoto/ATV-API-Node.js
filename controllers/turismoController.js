import turismoService from "./turismoService.js";
import { ObjectId } from "mongodb";

const getAllTurismo = async (req, res) => {
  try {
    const turismos = await turismoService.GetAll();
    res.status(200).json({ turismos });
  } catch (erro) {
    console.log("ERRO LISTAR:", erro);
    res.status(500).json({ error: "Erro ao listar" });
  }
};

const createTurismo = async (req, res) => {
  try {
    const { nome, descricao, pais, cidade, endereco, referencia, fonte, media } = req.body;
    await turismoService.Create(nome, descricao, pais, cidade, endereco, referencia, fonte, media);
    res.status(201).json({ message: "Cadastrado com sucesso!" });
  } catch (erro) {
    console.log("ERRO CADASTRO:", erro);
    res.status(500).json({ erro: "Erro interno", detalhe: erro.message });
  }
};

const getOneTurismo = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      const turismo = await turismoService.getOne(id);
      turismo ? res.status(200).json({ turismo }) : res.status(404).json({ error: "Não encontrado" });
    } else {
      res.status(400).json({ error: "ID inválido" });
    }
  } catch (erro) {
    console.log("ERRO BUSCAR:", erro);
    res.status(500).json({ error: "Erro interno" });
  }
};

const updateTurismo = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      const { nome, descricao, pais, cidade, endereco, referencia, fonte, media } = req.body;
      await turismoService.Update(id, nome, descricao, pais, cidade, endereco, referencia, fonte, media);
      res.status(200).json({ message: "Atualizado com sucesso!" });
    } else {
      res.status(400).json({ error: "ID inválido" });
    }
  } catch (erro) {
    console.log("ERRO ATUALIZAR:", erro);
    res.status(500).json({ error: "Erro interno" });
  }
};

const deleteTurismo = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      await turismoService.Delete(id);
      res.sendStatus(204);
    } else {
      res.status(400).json({ error: "ID inválido" });
    }
  } catch (erro) {
    console.log("ERRO DELETAR:", erro);
    res.status(500).json({ error: "Erro interno" });
  }
};

export default {
  getAllTurismo,
  createTurismo,
  getOneTurismo,
  updateTurismo,
  deleteTurismo
};