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

const updateBooking = async (req, res) => {

    const { id } = req.params;
    const { clients, date, time } = req.body;

    try {
        const booking = await Booking.findByPk(id);

        await booking.update({
            clients,
            date,
            time
        });

        res.status(201).json({
            msg: 'Booking updated',
            booking
        });

    } catch (error) {
        res.status(500).json(
            console.log(error),
            {
                msg: 'Error updating booking'
            }
        );
    }
}

const deleteBooking = async (req, res) => {
    const { id } = req.params;
    const restaurant = await Booking.findByPk(id);

    restaurant.destroy();

    res.json({
        msg: 'Booking deleted',
        booking
    });
}

module.exports = {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
}