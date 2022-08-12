const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validRestoID } = require('../middlewares/');
const { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants');

const router = Router();

router.get('/', getRestaurants);

router.get('/:id',
    validRestoID,
    getRestaurantById);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
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