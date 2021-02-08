const express = require('express');

const path = require('path');

const rootDir = require('../util/rootDir');

const router = express.Router();

const products = [];

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add Product',
    ref: '/admin/add-product',
  });
});

module.exports.router = router;
module.exports.products = products;
