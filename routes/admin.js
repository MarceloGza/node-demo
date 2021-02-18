const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-product', adminController.postAddProduct);
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getAdminProducts);

module.exports = router;
