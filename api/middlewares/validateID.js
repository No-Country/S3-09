const User = require('../models/user');

const validUserID = async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: 'User not found'
        });
    }

    next();
}


module.exports = {
    validUserID
};