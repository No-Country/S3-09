const bcryptjs = require('bcryptjs');
const { Booking } = require('../models');
const User = require('../models/user');
const { getBookings } = require('./bookings');

const getUsers = async (req, res) => {

    const [users, total] = await Promise.all([
        User.findAll({
            attributes: { exclude: ['password', 'google'] },
            include: "bookings"
        }),
        User.count()
    ]);

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

    res.json({
        user,
    })
}

const getInfoByUserId = async (req, res) => {

    const { id, userInfo } = req.params;

    const user = await User.findByPk(id);

    switch (userInfo) {
        case 'bookings':
            const bookings = await user.getBookings();
            (bookings.length === 0)
                ? res.status(400).json({
                    msg: 'You have not made any reservation yet',
                })
                : res.json({
                    bookings
                });
            break;
        case 'cards':
            const cards = await user.getCards();
            (cards.length === 0)
                ? res.status(400).json({
                    msg: 'we did not find any card,',
                })
                : res.json({
                    cards
                });
            break;

        default:
            res.json({
                msg: 'userInfo not found, it must be bookings or cards',
            });
            break;
    }
}

const createUser = async (req, res) => {

    const { name, email, username, password } = req.body;

    const user = new User({
        name,
        email,
        username,
        password: await bcryptjs.hash(password, 10),
        img: 'https://res.cloudinary.com/jonmenez/image/upload/v1660574559/Diiner/Ellipse_3_x5t9j0.png'
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
        const booking = await Booking.findByPk(2);

        user.addBooking(booking);
        await user.update({
            name,
            email,
            password
        });

        res.status(201).json({
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
    deleteUser,
    getInfoByUserId
}