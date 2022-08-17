const Dish = require('../models/dish');

const getDishes = async (req, res) => {
    const [dishes, total] = await Promise.all([
        Dish.findAll({
            include: ['restaurant']
        }),
        Dish.count()
    ])
    res.json({
        total,
        dishes
    });
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