const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validRestoID } = require('../middlewares/');
const { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants');
const { checkTimeFormat, priceFotmat } = require('../helpers/validateDB');

const router = Router();

router.get('/', getRestaurants);

router.get('/:id',
    validRestoID,
    getRestaurantById);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('opening_hour').not().isEmpty(),
    check('closing_hour').not().isEmpty(),
    check('closing_hour').custom(checkTimeFormat),
    check('opening_hour').custom(checkTimeFormat),
    check('highest_price').custom(priceFotmat),
    check('lowest_price').custom(priceFotmat),
    validateInputs
], createRestaurant);

router.put('/:id', [
    validRestoID,
    validateInputs
], updateRestaurant);

router.delete('/:id', [
    validRestoID,
    validateInputs
], deleteRestaurant);

module.exports = router;