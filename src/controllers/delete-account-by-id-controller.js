import { DeletedAccountById } from "../usecases/delete-account-by-id.js";

export class DeleteAccountByIdController {
  async handle(req, res) {
    const response = await new DeletedAccountById().execute(req.params.id);
    return res.status(200).send(response);
  }
}
