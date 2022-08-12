const Dish = require('../models/dish');

const getDishes = async (req, res) => {
    const dishes = await Dish.findAll({
        include: ['restaurant']
    });
    res.json(dishes);
}

const createDish = async (req, res) => {
    const { name, description, price, restaurant_id } = req.body;
    const dish = new Dish({
        name,
        description,
        price,
        restaurant_id
    });
    await dish.save();
    res.json({
        msg: 'Dish created',
        dish
    });
}

module.exports = {
    getDishes,
    createDish
}