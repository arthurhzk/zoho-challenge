import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class DeletedAccountById {
  async execute(id) {
    const response = await new RepositoryAccount().delete(id);
    return response;
  }
}
