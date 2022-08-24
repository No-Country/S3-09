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

    if (!expires) {
        throw new Error('Expires is required');
    }

    const date = new Date();
    const [currentYear, currentMonth] = [date.getFullYear(), date.getMonth() + 1];
    const expiresArr = expires.split('/');

    //Format dates to compare with current date
    const monthNum = expiresArr[0].charAt(0) == 0 ? expiresArr[0].charAt(1) : expiresArr[0];
    const yearNum = '20' + expiresArr[1];

    //Check if card's date is valid
    if (expiresArr.length !== 2 || expiresArr[0].length !== 2) {
        throw new Error('invalid expires date - valid format: MM/YY');
    }

    //Check if card's date is valid month
    if (monthNum > 12 || monthNum == 0) {
        throw new Error('invalid month - valid range: 1-12');
    }

    //Check if card's date is valid year
    if (yearNum < currentYear) {
        throw new Error('Card expired - please update your card');
    }

    //Check if card's date is expired
    if (yearNum == currentYear && monthNum < currentMonth) {
        throw new Error('Card expired - please update your card this year');
    }
    return true
}

//Check restaurant's hour
const checkTimeFormat = (hour) => {

    //Check if restaurant's hour is valid
    if (hour.length !== 5 || !hour.includes(':')) {
        throw new Error('invalid hours - valid format: hh:mm');
    }

    const hourArr = hour.split(':');
    const [HH, MM] = hourArr;

    //Check if restaurant's hour is valid hour
    if (HH > 23 || HH < 0) {
        throw new Error('invalid hours - valid range: 0-23');
    }
    //Check if restaurant's hour is valid minutes
    if (MM > 59 || MM < 0) {
        throw new Error('invalid minutes - valid range: 0-59');
    }

    return HH + ':' + MM
}

//Check restaurant price range
const priceFotmat = (price) => {

    if (isNaN(price)) {
        throw new Error('Price must be a number or float');
    }

    return true
}

module.exports = {
    existEmail,
    existUsername,
    checkCardDate,
    checkTimeFormat,
    priceFotmat
}