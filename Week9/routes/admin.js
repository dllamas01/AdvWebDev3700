const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require("../controllers/adminController")
const productsController = require("../controllers/oproducts");
// let products = [];
// router.get(  '/add-product', (req, res, next) => {
//     res.render( 'addProduct',
//         {
//             from: 'addProduct'
//         })
// });
router.get( '/add-product', adminController.getAddProduct );
router.post( '/product', adminController.postAddProduct);
router.get( '/showAdmin', adminController.getProducts);
router.get( '/deleteItem/:id', adminController.deleteProduct);
router.get( '/editItem/:id', adminController.editProduct);
router.post( '/postUpdateProduct', adminController.postUpdateProduct);


exports.routes = router;