const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers = async (req, res) => {

    const users = await User.findAll({
        attributes: { exclude: ['password', 'google'] },
    });

    const total = await User.count()

    res.json({
        total,
        users
    });
}

const getUserById = async (req, res) => {

    const { id } = req.params;
    const user = await User.findOne({
        attributes: { exclude: ['password', 'google'] },
        where: {
            id,
        },
    });

    res.json(user);

}

const createUser = async (req, res) => {

    const { name, email, username, password } = req.body;

    const user = new User({
        name,
        email,
        username,
        password: await bcryptjs.hash(password, 10)
    });

    await user.save();

    res.json({
        msg: 'User created',
        user
    });
}

const updateUser = async (req, res) => {

    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await User.findByPk(id);

        await user.update({
            name,
            email,
            password
        });

        res.status(200).json({
            msg: 'User updated',
            user
        });

    } catch (error) {
        res.status(500).json(
            console.log(error),
            {
                msg: 'User not updated'
            }
        );
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    user.destroy();

    res.json({
        msg: 'User deleted',
        user
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}