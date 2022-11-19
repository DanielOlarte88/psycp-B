const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/statusLicenses");

router.get("/", 
  getItems
);

router.get("/:id", 
  getItem
);

router.post("/", 
  authMiddleware, 
  checkRol(["profess", "admin"]), 
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
