const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, checkBookingTime } = require('../middlewares/');
const { getBookings, getBooking, createBooking, deleteBooking, updateBooking } = require('../controllers/bookings');

const routes = Router();

routes.get('/', getBookings);

routes.get('/:id', getBooking);

routes.post('/', [
    checkBookingTime,
    check('clients', 'Clients are required').not().isEmpty(),
    check('time', 'Opening time is required').not().isEmpty(),
    validateInputs
], createBooking);

routes.put('/:id', [
    checkBookingTime,
    check('clients', 'Clients are required').not().isEmpty(),
    check('time', 'Opening time is required').not().isEmpty(),
    validateInputs
], updateBooking);

routes.delete('/:id', [
    validateInputs
], deleteBooking);

module.exports = routes;
