import { ConsultAccountById } from "../usecases/consult-account-by-id.js";

export class ConsultAccountByIdController {
  async handle(req, res) {
    const response = await new ConsultAccountById().execute(req.params.id);
    return res.status(200).send(response);
  }
}
