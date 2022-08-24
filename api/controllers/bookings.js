const { Restaurant } = require('../models');
const Booking = require('../models/booking');

const getBookings = async (req, res) => {
    const bookings = await Booking.findAll();
    res.json(bookings);
}

const getBooking = async (req, res) => {
    const booking = await Booking.findOne({
        where: {
            id: req.params.id
        }
    });
    res.json({
        booking
    });
}

const createBooking = async (req, res) => {
    const user_id = req.userId
    const { clients, date, time, restaurant_id } = req.body;

    const restaurant = await Restaurant.findByPk(restaurant_id)

    const restaurant_name = restaurant.name
    const restaurant_img = restaurant.img
    const restaurant_address = restaurant.address

    try {

        const booking = await Booking.create({
            clients,
            date,
            time,
            user_id,
            restaurant_id,
            restaurant_name,
            restaurant_img,
            restaurant_address

        });

        res.json({
            msg: 'Booking created',
            booking
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: error
        })
    }

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
    const booking = await Booking.findByPk(id);

    booking.destroy();

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