const Restaurant = require('../models/restaurant');

const getRestaurants = async (req, res) => {

    const [restaurants, total] = await Promise.all([
        Restaurant.findAll({
            attributes: { exclude: ['hours', 'price_range'] },
            include: ['dishes']
        }),
        Restaurant.count()
    ])

    res.json({
        total,
        restaurants
    });
}

const getRestaurantById = async (req, res) => {

    const { id } = req.params;
    const restaurant = await Restaurant.findOne({
        attributes: { exclude: ['hours', 'price_range'] },
        where: {
            id,
        },
    });

    res.json(restaurant);

}

const createRestaurant = async (req, res) => {

    const { name, address, description, opening_hour, closing_hour } = req.body;
    const hours = `${opening_hour}hs - ${closing_hour}hs`;

    const restaurant = new Restaurant({
        name,
        address,
        description,
        hours,
    });

    await restaurant.save();

    res.json({
        msg: 'Restaurant created',
        restaurant
    });
}

const updateRestaurant = async (req, res) => {

    const { id } = req.params;
    const { name, address, description } = req.body;

    try {
        const restaurant = await Restaurant.findByPk(id);

        await restaurant.update({
            name,
            address,
            description,
        });

        res.status(201).json({
            msg: 'Restaurant updated',
            restaurant
        });

    } catch (error) {
        res.status(500).json(
            console.log(error),
            {
                msg: 'Error updating restaurant'
            }
        );
    }
}

const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);

    restaurant.destroy();

    res.json({
        msg: 'Restaurant deleted',
        restaurant
    });
}

module.exports = {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}