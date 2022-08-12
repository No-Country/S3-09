const Dish = require('../models/dish');

const getDishes = async (req, res) => {
    const dishes = await Dish.findAll();
    res.json(dishes);
}


module.exports = {
    getDishes
}