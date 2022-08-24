const { checkTimeFormat } = require('../helpers/validateDB');
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

    const { name, address, description, opening_hour, closing_hour, lowest_price, highest_price, img } = req.body;
    const newimg = img

    if (lowest_price > highest_price) {
        res.status(400).json({
            msg: 'highest_price is less than lowest_price'
        })
    }


    const data = {
        name,
        address,
        description,
        opening_hour,
        closing_hour,
        lowest_price,
        highest_price,
        img: newimg || 'https://res.cloudinary.com/jonmenez/image/upload/v1661365062/Diiner/restaurant-flat-illustration_23-2147538098_tbkcme.jpg'
    };

    const restaurant = new Restaurant(data)

    await restaurant.save();

    res.json({
        msg: 'Restaurant created',
        restaurant
    });
}

const updateRestaurant = async (req, res) => {

    const { id } = req.params;
    const { name, address, description, opening_hour, closing_hour, lowest_price, highest_price, img } = req.body;

    if (opening_hour || closing_hour) {
        // checkTimeFormat(opening_hour)
        console.log(checkTimeFormat(opening_hour))
        // checkTimeFormat(closing_hour)
    }

    if (lowest_price > highest_price) {
        res.status(400).json({
            msg: 'highest_price is less than lowest_price'
        })
    }

    try {
        const restaurant = await Restaurant.findByPk(id);

        let newImg = restaurant.img

        if (newImg === restaurant.img) {
            newImg = img
        }

        await restaurant.update({
            name,
            address,
            description,
            opening_hour,
            closing_hour,
            lowest_price,
            highest_price,
            img: newImg
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