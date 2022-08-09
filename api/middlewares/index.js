
const validateInputs = require('../middlewares/validateInputs');
const validJWT = require('../middlewares/validToken');
const { validUserID } = require('../middlewares/validateID');

module.exports = {
    validateInputs,
    validJWT,
    validUserID,
}