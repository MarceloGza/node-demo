const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      docTitle: 'Shop',
      ref: '/',
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'Products',
      ref: '/products',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Cart',
    ref: '/cart',
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    docTitle: 'Orders',
    ref: '/orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    docTitle: 'Checkout',
    ref: '/checkout',
  });
};
