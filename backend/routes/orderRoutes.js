import express from "express";
import {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
} from "../controller/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", protect, addOrderItem);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);

export default router;
