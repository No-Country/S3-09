const { Restaurant, Favorite } = require('../models');

const addFavorite = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
    const restaurant = await Restaurant.findByPk(id);

    await Favorite.create({
        user_id: userId,
        restaurant_id: id,
    });
    res.json({
        msg: 'Restaurant added to favorites',
        restaurant,
    });
}

const removeFavorite = async (req, res) => {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);
    const favorite = await Favorite.findOne({
        where: {
            restaurant_id: id,
            user_id: req.userId,
        },
    });

    if (!favorite) {
        return res.status(404).json({
            msg: 'Restaurant not found in favorites',
        });
    }

    await favorite.destroy();

    res.json({
        msg: 'Restaurant removed from favorites',
        restaurant,
    });
}

module.exports = {
    addFavorite,
    removeFavorite
}