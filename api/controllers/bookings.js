const Booking = require('../models/booking');

const getBookings = async (req, res) => {
    const bookings = await Booking.findAll({
        include: ['calendar'],
    });
    res.json(bookings);
}

const getBooking = async (req, res) => {
    const booking = await Booking.findOne({
        where: {
            id: req.params.id
        }
    });
    res.json({
        msg: 'Booking retrieved',
        booking
    });
}

const createBooking = async (req, res) => {
    const { clients, date, time } = req.body;
    const booking = await Booking.create({
        clients,
        date,
        time
    });
    res.json({
        msg: 'Booking created',
        booking
    });
}

module.exports = {
    getBookings,
    getBooking,
    createBooking
}