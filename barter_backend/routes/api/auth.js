const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//user model 
const User = require('../../models/User');


//user login request
router.post("/", (req, res) => {
    const { email, password } = req.body;

    //simple vaalidation 
    if (!email || !password)
        return res.status(400).json({ msg: "please enter all fields" });


    //check for user
    user.findOne({ email }).then((user) => {
        if (!user) return res.status(400).json({ msg: "user does not exist" });


        //validate user password
        bcryptjs.compare(password, user.password)
            .then((isMatch) => {
                if (!isMatch) return res.status(400).json({ msg: "invalid password" });

                jwt.sign(
                    { id: user.id },
                    config.get("barter"),
                    { expiresIn: 3600 },
                    (err, token) => {

                        if (err) throw err;
                        res.status(200).json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                phone: user.phone,
                                account_number: user.account_number,
                                account_balance: user.account_balance,

                            },
                        });
                    }
                )
            });
    });
});


module.exports = router;

