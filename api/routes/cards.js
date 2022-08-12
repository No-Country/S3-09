const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validCardID } = require('../middlewares/');
const { getCards, getCardById, createCard, updateCard, deleteCard } = require('../controllers/cards');

const router = Router();

router.get('/', getCards);

router.get('/:id', 
    validCardID,
    getCardById);

router.post('/', [
    check('full_name', 'Name is required').not().isEmpty(),
    check('card_number', 'Number is required').not().isEmpty(),
    check('expires', 'Expiration date is required').not().isEmpty(),
    check('CVV', 'CVV is required').not().isEmpty(),
    validateInputs
], createCard);

router.put('/:id', [
    validCardID,
    check('full_name', 'Name is required').not().isEmpty(),
    check('card_number', 'Number is required').not().isEmpty(),
    check('expires', 'Expiration date is required').not().isEmpty(),
    check('CVV', 'CVV is required').not().isEmpty(),
    validateInputs
], updateCard);

router.delete('/:id', [
    validCardID,
    validateInputs
], deleteCard);

module.exports = router;