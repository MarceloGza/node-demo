const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (!data || !data.toString()) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) throw err;
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
