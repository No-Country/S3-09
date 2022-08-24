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
    const { name, img } = req.body;

    const newImg = img

    const dish = new Dish({
        name,
        img: newImg || 'https://res.cloudinary.com/jonmenez/image/upload/v1661363859/Diiner/b86c6efe87c5725c0c8b3e76523886bd_nen7ry.jpg'
    });

    await dish.save();
    res.json({
        msg: 'Dish created',
        dish
    });
}

const updateDish = async (req, res) => {
    const { id } = req.params
    const { name } = req.body;

    const dish = await Dish.findByPk(id)

    if (!dish) {
        res.status(404).json({
            msg: 'dish not found'
        })
    }

    let newImg = dish.img

    if (newImg === dish.img) {
        newImg = img
    }

    await dish.update({
        name,
        img: newImg
    });

    res.json({
        msg: 'Dish created',
        dish
    });
}

module.exports = {
    getDishes,
    createDish,
    updateDish
}