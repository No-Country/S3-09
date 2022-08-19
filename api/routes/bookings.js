const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs } = require('../middlewares/');
const { getBookings, getBooking, createBooking, deleteBooking, updateBooking } = require('../controllers/bookings');
const { checkTimeFormat } = require('../helpers/validateDB');

const routes = Router();

routes.get('/', getBookings);

routes.get('/:id', getBooking);

routes.post('/', [
    check('clients', 'Clients are required').not().isEmpty(),
    check('time', 'Time is required').not().isEmpty(),
    check('time').custom(checkTimeFormat),
    validateInputs
], createBooking);

routes.put('/:id', [
    check('clients', 'Clients are required').not().isEmpty(),
    check('time', 'Time is required').not().isEmpty(),
    check('time').custom(checkTimeFormat),
    validateInputs
], updateBooking);

routes.delete('/:id', [
    validateInputs
], deleteBooking);

module.exports = routes;
