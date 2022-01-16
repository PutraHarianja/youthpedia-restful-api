const EventModel = require('../Models/event.model')

class EventController {

    static async createNewEvent(req, res) {
        try {
            await EventModel.findOne({ title: req.body.title }).then((event) => {
                if (event) {
                    res.status(400).json({
                        message: 'event already exist'
                    })
                } else {
                    const newEvent = new EventModel({
                        title: req.body.title,
                        description: req.body.description,
                        location: req.body.location,
                        schedule: req.body.schedule,
                    });

                    newEvent.save()
                    return res.status(200).send({
                        message: 'event created successfully',
                        data: newEvent
                    });
                }
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({ err: error })
        }
    }

    static async getEventbyId(req, res) {
        eventModel.findById({ _id: req.params.id_event }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no Event found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        })
    }

    static async updateEventbyId(req, res) {
        EventModel.findByIdAndUpdate({ _id: req.params.id_event }, {
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            schedule: req.body.schedule,
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.send({
                    message: 'no Event found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data Event success',
                    data: req.body
                })
            }
        })
    }

    static async getAllEvents(req, res) {

        EventModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        })
    }

    static async deleteEventbyId(req, res) {
        EventModel.deleteOne({ _id: req.params.id_event }, (error, result) => {
            if (error) {
                res.status(400).send({
                    message: 'no id found, delete action failed'
                })
            } else {
                res.status(200).send({
                    message: `delete data ${req.params.id_event} successfully`
                })
            }
        })
    }

}


module.exports = EventController