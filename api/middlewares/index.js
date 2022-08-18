
const validateInputs = require('../middlewares/validateInputs');
const validJWT = require('../middlewares/validToken');
const { validUserID } = require('../middlewares/validateID');
const { validRestoID } = require('../middlewares/validResto');
const { validCardID } = require('../middlewares/validCard');
const { checkBookingTime } = require('../middlewares/validBooking');

module.exports = {
    validateInputs,
    validJWT,
    validUserID,
    validRestoID,
    validCardID,
    checkBookingTime
}