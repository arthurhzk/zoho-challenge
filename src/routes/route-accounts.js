import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { PostAccountController } from "../controllers/post-account-controller.js";
import { DeleteAccountByIdController } from "../controllers/delete-account-by-id-controller.js";
const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);
router.post("/accounts", new PostAccountController().handle);
router.delete("/accounts/:id", new DeleteAccountByIdController().handle);

export default router;
