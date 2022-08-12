const Restaurant = require('../models/restaurant');

const validRestoID = async (req, res, next) => {
    const { id } = req.params;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
        return res.status(404).json({
            msg: 'Restaurant not found'
        });
    }

    next();
}


module.exports = {
    validRestoID
};