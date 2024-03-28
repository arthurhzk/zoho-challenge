import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class UpdateAccountById {
  async execute(id, account) {
    const response = await new RepositoryAccount().update(id, account);
    return response;
  }
}
