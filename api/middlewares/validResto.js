const Restaurant = require('../models/restaurant');

const validRestoID = async (req, res, next) => {
    const { id } = req.params;
    const { restaurant_id } = req.body

    const restaurant = await Restaurant.findByPk(id || restaurant_id);

    if (!restaurant) {
        if (!id) {
            return res.status(404).json({
                msg: 'restaurant_id is required'
            });
        }
        return res.status(404).json({
            msg: 'Restaurant not found'
        });
    }

    next();
}


module.exports = {
    validRestoID
};