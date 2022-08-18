const { Router } = require('express');
const { check } = require('express-validator');
const { getBookings, getBooking, createBooking } = require('../controllers/bookings');

const routes = Router();

routes.get('/', getBookings);

routes.get('/:id', getBooking);

routes.post('/', createBooking);

module.exports = routes;
