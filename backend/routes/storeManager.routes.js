import express from "express";
import {
  approveRequest,
  getReports,
  requestCheckout,
  toggleUserStatus,
  updateItemStatus,
  updateUserRole,
  getRequsets,
} from "../controllers/storeManager.controllers.js";
import { protectRout } from "../middleware/protector.middleware.js";

const router = express.Router();

router.post("/update-status/:userId", protectRout, toggleUserStatus);
router.post("/update-role/:userId", protectRout, updateUserRole);
router.post("/approve/:reqId", protectRout, approveRequest);
router.get("/reports", protectRout, getReports);
router.post("/update-item-status/:itemId", protectRout, updateItemStatus);
router.post("/request-checkout/:itemId", protectRout, requestCheckout);
router.get("/requests", protectRout, getRequsets);
export default router;
