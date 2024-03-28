import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class PostAccount {
  async execute(account) {
    const response = await new RepositoryAccount().create(account);
    return response;
  }
}
