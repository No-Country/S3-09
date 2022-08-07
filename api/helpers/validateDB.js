const User = require('../models/user');

//Exist email
const existEmail = async (email) => {
    const user = await User.findOne({
        where: { email }
    });
    if (user) {
        throw new Error(`email: ${email} already in use`);
    }
}


module.exports = {
    existEmail,
}