const express = require('express');
const Order = require('../models/Order');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const auth = require('../middlewares/auth');
const { findById } = require('../models/Order');
Joi.objectId = require('joi-objectid')(Joi);
const validate = require('../util/mangoId-Validator');


const router = express.Router();


router.get('/', auth, async (req, res) => {
    const orders = await Order.find({ "OrderItems.OrderTo": req.user.id })
        // .populate({
        //     path: 'OrderItems',
        //     populate: [{
        //         path: 'product_Id',
        //         model: 'Menu'
        //     }]
        // })
        .populate({ path: 'OrderItems' })
        .exec(function (err, docs) {
            if (err) {
                console.log(err)
                res.send(err)
            }
            else {
                res.send(docs);
                console.log(docs)
            }

        });
});


module.exports = router;