
const validateInputs = require('../middlewares/validateInputs');
const validJWT = require('../middlewares/validToken');
const { validUserID } = require('../middlewares/validateID');
const { validRestoID } = require('../middlewares/validResto');
const { validCardID } = require('../middlewares/validCard');

module.exports = {
    validateInputs,
    validJWT,
    validUserID,
    validRestoID,
    validCardID
}