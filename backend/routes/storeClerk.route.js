import express from "express";
import {
  addItem,
  deleteItem,
  updateItem,
} from "../controllers/stroreClerk.controller.js";
import { protectRout } from "../middleware/protector.middleware.js";
import { getItems } from "../controllers/storeManager.controllers.js";

const router = express.Router();

router.post("/add", protectRout, addItem);
router.post("/update/:itemId", protectRout, updateItem);
router.delete("/delete/:itemId", protectRout, deleteItem);
router.get("/", protectRout, getItems);

export default router;
