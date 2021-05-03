const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//user model  
const User = require('../../models/User');


// utils 
const { getRandom } = require('../../helpers/utils')



//post request  for registration
router.post("/", (req, res) => {

    const { name, email, phone, password, userRef } = req.body;



    //little validation
    if (!name || !email || !phone || !password) {
        return res.status(400).
            json({ msg: "please enter name,email,password & phone" })
    }




    //check is  user exist
    User.findOne({ email }).then((user) => {
        if (user) return res.status(400).json({ msg: "user already exist" })

        const newUser = new User({
            name,
            email,
            phone,
            account_number: getRandom(11),
            account_balance: getRandom(5),
            userRef,
            password,
        });




        //create salt using bcryptjs
        bcryptjs.genSalt(10, (err, salt) => {
            bcryptjs.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;

                newUser.save().then(user => {
                    jwt.sign(
                        { id: user.id },
                        config.get('bartersecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            return res.status(200).json({
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
                    );
                })
            });
        });
    });
});



module.exports = router;