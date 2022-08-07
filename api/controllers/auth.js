const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateToken } = require('../helpers/generateToken');
const { googleVerufy } = require('../helpers/validateGoogle');

const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: { email }
        });

        //Verify is user is active
        if (!user.status) {
            return response.status(400).json({
                msg: 'invalid email or password - status'
            })
        }

        //Verify if password is correct
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                msg: 'invalid email or password'
            });
        }

        //Create JWT
        const token = await generateToken(user.id);

        res.json({
            msg: 'Login successfully',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        })


    } catch (error) {
        res.status(500).json({
            msg: 'invalid email or password'
        });
    }
}

const googleSignIn = async (req, res) => {
    const { id_token } = req.headers;

    try {
        //Verify if token is valid
        const { name, email } = await googleVerufy(id_token);

        let user = await User.findOne({ where: { email } });

        //Verify if user exists and then create a new user
        if (!user) {
            const data = {
                name,
                email,
                password: 'google sign in password',
                google: true
            }

            user = await User.create(data);

            //Save user to database
            await user.save();
        }

        //Verify if user is active
        if (!user.status) {
            return res.status(401).json({
                msg: 'contact support - user blocked'
            })
        }

        //Create JWT
        const token = await generateToken(user.id);

        res.json({
            msg: 'Login successfully',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        })

    } catch (error) {
        res.status(500).json({
            msg: 'invalid Google token'
        });
    }
}

module.exports = {
    login,
    googleSignIn
}