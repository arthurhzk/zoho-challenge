import { AccountSchema } from "../schema/schema-accounts.js";

export class RepositoryAccount {
  async create(data) {
    return await AccountSchema.create({
      nome: data.nome,
      cnpj: data.cnpj,
      dataCriacao: data.dataCriacao,
    });
  }

  async update(id, data) {
    return await AccountSchema.findOneAndUpdate(
      { _id: id },
      {
        nome: data.nome,
        cnpj: data.cnpj,
        dataCriacao: data.dataCriacao,
      },
      { new: true }
    );
  }

  async delete(id) {
    return await AccountSchema.deleteOne({ _id: id });
  }

  async fetch(id) {
    return await AccountSchema.findOne({ _id: id });
  }

  async findAll() {
    return await AccountSchema.find();
  }
}
