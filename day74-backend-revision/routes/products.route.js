const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.controller");

// routes - endpoint, controller.function
router.get("/", productController.getallProducts);
router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;