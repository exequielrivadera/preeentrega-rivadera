const ProductManager = require("./class/productManager");
const {auriculares, joystick} = require("./products/products.js");


const newProductManager = new ProductManager("database/db.json")
// newProductManager.getProducts()
newProductManager.addProduct(auriculares)