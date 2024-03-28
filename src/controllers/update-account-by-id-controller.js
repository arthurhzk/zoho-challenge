import { UpdateAccountById } from "../usecases/update-account-by-id.js";

export class UpdateAccountByIdController {
  async handle(req, res) {
    const response = await new UpdateAccountById().execute(
      req.params.id,
      req.body
    );
    return res.status(200).send(response);
  }
}
