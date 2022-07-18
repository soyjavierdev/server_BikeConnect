const router = require("express").Router()

const Event = require('../models/Event.model')
const { findByIdAndDelete } = require("../models/User.model")

router.use('/getAllEvents', (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.use('/getOneEvent/:event_id', (req, res, next) => {

    const { event_id } = req.params
    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/saveEvent', (req, res) => {

    Event
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/updateEvent/:event_id', (req, res, next) => {

    const { event_id } = req.params
    const { origin, location, destination, date, description, numberOfCyclists, owner, cyclists } = req.body

    Event
        .findByIdAndUpdate(event_id, { origin, location, destination, date, description, numberOfCyclists, owner, cyclists })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteEvent/:event_id', (req, res, next) => {

    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .catch(err => res.status(500).json(err))
})


module.exports = router
