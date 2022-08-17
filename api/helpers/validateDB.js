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

//Exist username
const existUsername = async (username) => {
    const user = await User.findOne({
        where: { username }
    });
    if (user) {
        throw new Error(`username: ${username} already in use`);
    }
}

//Check if card's date is valid
const checkCardDate = (expires) => {
    const date = new Date();
    const [currentYear, currentMonth] = [date.getFullYear(), date.getMonth() + 1];
    const expiresArr = expires.split('/');
    console.log('xpiresArr.lenth: ', expiresArr.length, 'month: ', expiresArr[0]);
    console.log('currentMonth: ', expiresArr[0].length);
    console.log(expiresArr[1] < currentYear)

    if (expiresArr.length !== 2 || expiresArr[0].length !== 2) {
        throw new Error('invalid expires date - valid format: MM/YY');
    }


    if (expiresArr[0] > 12 || expiresArr[0] == 0) {
        throw new Error('invalid month - valid range: 1-12');
    }

    if (expiresArr[1] < currentYear) {
        throw new Error('Card expired - please update your card');
    }
    if (expiresArr[1] === currentYear && expiresArr[0] < currentMonth) {
        throw new Error('Card expired - please update your card this year');
    }
    return true
}

module.exports = {
    existEmail,
    existUsername,
    checkCardDate
}