const router = require('express').Router();
const {User} = require('../models')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { UniqueConstraintError } = require('sequelize/lib/errors');

/* SIGN UP */
router.post('/register', async (req, res) => {
    //object deconstructing to seperate data when sent in the body
    let {firstName, lastName, email, password} = req.body;

    try{
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, 13)
        })
        res.status(201).json({
            message: "User registered!",
            user: newUser
        })
    }catch (error) {
        if(error instanceof UniqueConstraintError) {
            res.status(409).json({
                message: "Email already in use."
            })
        } else {
            res.status(500).json({
                error: "failed to register user"
            })
        }
    }
})

module.exports = router