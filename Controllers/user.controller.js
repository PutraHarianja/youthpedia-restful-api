const UserModel = require('../Models/user.model')

const jwt = require('../Helpers/jwt')
const bcrypt = require('../Helpers/bcrypt')


class UserController {

    static async createNewUser(req, res) {
        try {
            await UserModel.findOne({ username: req.body.username }).then((user) => {
                if (user) {
                    res.status(400).json({
                        message: 'user already exist'
                    })
                } else {
                    const newUser = new UserModel({
                        username: req.body.username,
                        password: bcrypt.generatePasswordHash(req.body.password),
                        email: req.body.email,
                        role: req.body.role,
                    });

                    newUser.save()
                    return res.status(200).send({
                        message: 'user created successfully',
                        data: {
                            username: newUser.username,
                            role: newUser.role
                        }
                    });
                }
            })
        } catch (error) {
            res.status(500).send({ err: error })
        }
    }

    static async login(req, res) {
        const email = req.body.email
        const password = req.body.password

        UserModel.findOne({ email: email }, (error, result) => {
            if (error) {
                return res.status(401).send({
                    message: 'wrong email or password'
                })
            } else {

                if (!bcrypt.comparePaswwordHash(password, result.password)) {
                    return res.status(401).send({
                        message: 'wrong email or password'
                    })
                }

                res.status(200).send({
                    message: 'login success',
                    data: {
                        access_token: jwt.generateToken({
                            _id: result._id,
                            username: result.username,
                            role: result.role
                        })
                    }
                })
            }
        })
    }


    static async userProfile(req, res) {
        try {
            const token = req.headers.authorization
            const result = token.replace("Bearer", "").trim()

            const data = jwt.verifyToken(result)

            UserModel.findById({ _id: data._id }, (error, result) => {
                if (error) {
                    return res.send({
                        message: 'Unauthorized'
                    })
                } else {
                    res.status(200).send({
                        message: 'data retrieved',
                        data: {
                            _id: result._id,
                            username: result.username,
                            date: result.date
                        }
                    })
                }
            })
        } catch (error) {
            res.status(403).send("forbidden")
        }
    }

    // static async getUserbyId(req, res) {
    //     UserModel.findById({ _id: req.params.id_user }, (error, result) => {
    //         if (error) {
    //             return res.send({
    //                 message: 'no user found'
    //             })
    //         } else {
    //             res.status(200).send({
    //                 message: 'data retrieved',
    //                 data: result
    //             })
    //         }
    //     })
    // }

    static async updateUserbyId(req, res) {
        UserModel.findByIdAndUpdate({ _id: req.params.id_user }, {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            role : req.body.role,
        }, (error, result) => {
            if(error){
                console.log(error)
                return res.send({
                    message: 'no user found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data user success',
                    data: req.body
                })
            }
        })
    }

}


module.exports = UserController