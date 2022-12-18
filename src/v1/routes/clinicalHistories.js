const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/session");
const checkRole = require("../../middleware/role");
const {
  getItems,
  getItemsById,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../../controllers/clinicalHistories");

router.get("/", 
  getItems
);

router.get("/:id", 
  getItemsById
);

router.get("/:id", 
  getItem
);

router.post("/", 
  authMiddleware, 
  checkRole(["profes", "admin"]), 
  createItem
);

router.put("/:id", 
  authMiddleware, 
  updateItem
);

router.delete("/:id", 
  authMiddleware, 
  deleteItem
);

module.exports = router;
