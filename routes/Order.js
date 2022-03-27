const express = require('express');
const Order = require('../models/Order');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const auth = require('../middlewares/auth');
const { findById } = require('../models/Order');
Joi.objectId = require('joi-objectid')(Joi);
const validate = require('../util/mangoId-Validator');
var ObjectId = require('mongoose').Types.ObjectId;

const router = express.Router();

/**
 * @route GET/ api/coursetopic 
 * * @description Get List of coursestopics
 * @access Private
 */
router.get('/business/', auth, async (req, res) => {
    const orders = await Order.find({ "OrderItems.OrderTo": req.user.id });
    res.send(orders)
});

/**
 * @route GET/ api/coursestopic
 * @description Get single of courses
 * @access Private
 */
router.get('/:id', auth, async (req, res) => {
    if (!validate(req.params.id)) {
        res.status(400).send('Please Provide Valid Id... ');
    }

    const topic = await Topic.findById(req.params.id);
    if (!topic) {
        res.status(404).send('topic id is invalid');
    }
    res.send(topic);
});


/**
 * @route POST / api/coursestopic
 * @description Add coursetopic
 * @access Private
 */
router.post('/', async (req, res) => {
    const { address, cart } = req.body;
    const orderItem = [];
    cart.map((item) => {
        const newItem = {
            product_Id: [new ObjectId(item.item._id)],
            quantity: item.quantity,
            OrderStatus: "pending",
            OrderTo: item.item.user_id
        }
        orderItem.push(newItem)
    })

    try {
        order = new Order({
            Address: address,
            OrderItems: orderItem
        });
        await order.save();
        res.status(200).send(order);
    }
    catch (error) {
        res.status(500).send('Server Error');
    }
    res.send(req.body)
});

/**
 * @route Put / api/courses/:id
 * @description update course
 * @access Private
 */
router.put('/:id', async (req, res) => {

    const { TopicTitle, TopicDescription } = req.body;
    const updateTopic = {};
    if (TopicTitle) {
        updateTopic.TopicTitle = TopicTitle;

    }
    if (TopicDescription) {
        updateTopic.TopicDescription = TopicDescription;
    }
    try {
        const topic = await Topic.findById(req.params.id);
        if (!topic) {
            return res.status(404).send('Topic id is invalid');
        }

        const coursetopic = await Topic.findByIdAndUpdate(req.params.id,
            { $set: updateTopic },
            { new: true });

        res.status(200).send(coursetopic);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});


/**
 * @route DELETE / api/course
 * @description remove course
 * @access Private
 */
router.delete('/:id', async (req, res) => {
    try {
        const topic = await Topic.findById(req.params.id);

        if (!topic) return res.status(404).send('Topic with this id does not exists');

        // // Make sure user owns course
        // if (course.educator_id.toString() !== req.user.id)


        //     return res.status(401).json({ msg: 'Not authorized' });

        await Topic.findByIdAndRemove(req.params.id);
        res.status(200).json('Topic deleted');

    } catch (err) {
        res.status(500).send('Server error');
    }

});

// Schema Validation
const topicSchemaValidation = Joi.object({
    course_id: Joi.objectId().required().label('Course Id'),
    TopicTitle: Joi.string().max(200).required().label('Topic Title'),
    TopicDescription: Joi.string().required().label('Topic Description')

});
module.exports = router;