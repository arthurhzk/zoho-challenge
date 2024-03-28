import { PostAccount } from "../usecases/post-account.js";

export class PostAccountController {
  async handle(req, res) {
    const response = await new PostAccount().execute(req.body);
    return res.status(201).send(response);
  }
}
