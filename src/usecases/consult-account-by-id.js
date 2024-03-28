import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class ConsultAccountById {
  async execute(id) {
    const response = await new RepositoryAccount().fetch(id);
    return response;
  }
}
