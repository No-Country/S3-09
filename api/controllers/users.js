const bcryptjs = require('bcryptjs');
const { Restaurant } = require('../models');
const User = require('../models/user');

//Get all users
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

//Get user by id
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

//Get userInfo by user'id, including bookings, cards and favorites
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
        case 'favorites':
            const favoritesArr = await user.getFavorites();
            //Create an array of restaurant objects
            const favorites = await Restaurant.findAll({
                where: {
                    id: favoritesArr.map(favorite => favorite.restaurant_id)
                }
            });
            (favorites.length === 0)
                ? res.status(400).json({
                    msg: 'we did not find any favorites,',
                })
                : res.json({
                    favorites
                });
            break;

        default:
            res.json({
                msg: 'userInfo not found, it must be bookings, cards or favorites',
            });
            break;
    }
}

//Create user
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

//Update user
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

//Delete user
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
    getInfoByUserId,
}