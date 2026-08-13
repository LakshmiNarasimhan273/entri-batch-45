const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.controller");

router.get("/", productController.allProducts);
router.post("/add", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;