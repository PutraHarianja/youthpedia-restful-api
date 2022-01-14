const BeritaModel = require('../Models/berita.model')

class BeritaController {

    static async createNewBerita(req, res) {
        try {
            await BeritaModel.findOne({ title: req.body.title }).then((berita) => {
                if (berita) {
                    res.status(400).json({
                        message: 'berita already exist'
                    })
                } else {
                    const newBerita = new BeritaModel({
                        title: req.body.title,
                        description: req.body.description,
                        picture: req.body.picture,
                        category: req.body.category,
                        source: req.body.source,
                        comments: req.body.comments,
                        trend: req.body.trend,
                    });

                    newBerita.save()
                    return res.status(200).send({
                        message: 'berita created successfully',
                        data: newBerita
                    });
                }
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({ err: error })
        }
    }

    static async getBeritabyId(req, res) {
        BeritaModel.findById({ _id: req.params.id_berita }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no Berita found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        })
    }

    static async updateBeritabyId(req, res) {
        BeritaModel.findByIdAndUpdate({ _id: req.params.id_berita }, {
            title: req.body.title,
            description: req.body.description,
            picture: req.body.picture,
            category: req.body.category,
            source: req.body.source,
            comments: req.body.comments,
            trend: req.body.trend,
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.send({
                    message: 'no Berita found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data Berita success',
                    data: req.body
                })
            }
        })
    }

    static async getAllBeritas(req, res) {
        console.log(req.loggedUser)

        BeritaModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        })
    }

    static async deleteBeritabyId(req, res) {
        BeritaModel.deleteOne({ _id: req.params.id_berita }, (error, result) => {
            if (error) {
                res.status(400).send({
                    message: 'no id found, delete action failed'
                })
            } else {
                res.status(200).send({
                    message: `delete data ${req.params.id_berita} successfully`
                })
            }
        })
    }

}


module.exports = BeritaController