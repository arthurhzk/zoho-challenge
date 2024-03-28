import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { PostAccountController } from "../controllers/post-account-controller.js";
const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);
router.post("/accounts", new PostAccountController().handle);

export default router;
