const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validJWT, validRestoID } = require('../middlewares/');
const { getBookings, getBooking, createBooking, deleteBooking, updateBooking } = require('../controllers/bookings');
const { checkTimeFormat } = require('../helpers/validateDB');

const routes = Router();

routes.get('/', getBookings);

routes.get('/:id', getBooking);

routes.post('/', [
    validJWT,
    validRestoID,
    check('clients', 'Clients are required').not().isEmpty().isInt(),
    check('clients', 'Clients must be intenger').isInt(),
    check('time').custom(checkTimeFormat),
    validateInputs
], createBooking);

routes.put('/:id', [
    check('clients', 'Clients are required').not().isEmpty().isInt(),
    check('clients', 'Clients must be intenger').isInt(),
    check('time').custom(checkTimeFormat),
    validateInputs
], updateBooking);

routes.delete('/:id', [
    validateInputs
], deleteBooking);

module.exports = routes;
