const Card = require('../models/card');

const validCardID = async (req, res, next) => {
    const { id } = req.params;

    const card = await Card.findByPk(id);

    if (!card) {
        return res.status(404).json({
            msg: 'Card not found'
        });
    }

    next();
}


module.exports = {
    validCardID
};