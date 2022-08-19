const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validRestoID } = require('../middlewares/');
const { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants');
const { checkTimeFormat } = require('../helpers/validateDB');

const router = Router();

router.get('/', getRestaurants);

router.get('/:id',
    validRestoID,
    getRestaurantById);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('opening_hour', 'Opening hour is required').not().isEmpty(),
    check('closing_hour', 'Closing hour is required').not().isEmpty(),
    check('opening_hour').custom(checkTimeFormat),
    check('closing_hour').custom(checkTimeFormat),
    validateInputs
], createRestaurant);

router.put('/:id', [
    validRestoID,
    check('name', 'Name is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('dishes', 'Dishes are required').not().isEmpty(),
    check('available_dates', 'Available dates are required').not().isEmpty(),
    validateInputs
], updateRestaurant);

router.delete('/:id', [
    validRestoID,
    validateInputs
], deleteRestaurant);

module.exports = router;