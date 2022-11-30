const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router()
const Message = require('../../models/Messages')

router.get('/', (req, res) => {
    Message.find().then(result => {
        res.send(result)
    }).catch(err => {
        console.log(err.message)
    })
});

router.post('/',
[
    check("sender", "Sender name is required").not().isEmpty(),
    check("reciever", "Reciever name is required").not().isEmpty(),
    check("title", "Title name is required").not().isEmpty(),
    check("message", "Message name is required").not().isEmpty(),
],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { sender, reciever, title, message } = req.body;

    try {
        let mesage = new Message({
            sender,
            reciever,
            title,
            message
        })
        await mesage.save()
        res.json(req.body)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error")
    }
})

module.exports = router;