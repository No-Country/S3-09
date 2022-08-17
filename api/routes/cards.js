const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validCardID, validJWT } = require('../middlewares/');
const { getCards, getCardById, createCard, updateCard, deleteCard } = require('../controllers/cards');
const { checkCardDate } = require('../helpers/validateDB');

const router = Router();

router.get('/', getCards);

router.get('/:id',
    validCardID,
    getCardById);

router.post('/', [
    validJWT,
    check('full_name', 'Name is required').not().isEmpty(),
    check('card_number', 'Number is required').not().isEmpty(),
    check('card_number', 'card_number must be 16 char long').isLength({ min: 16, max: 16 }),
    check('expires').custom(checkCardDate),
    check('CVV', 'CVV is required').not().isEmpty(),
    check('CVV', 'CVV must be 3 char long').isLength({ min: 3, max: 3 }),
    validateInputs
], createCard);

router.put('/:id', [
    validCardID,
    check('full_name', 'Name is required').not().isEmpty(),
    check('card_number', 'Number is required').not().isEmpty(),
    check('card_number', 'card_number must be 16 char long').isLength({ min: 16, max: 16 }),
    check('expires').custom(checkCardDate),
    check('CVV', 'CVV is required').not().isEmpty(),
    check('CVV', 'CVV must be 3 char long').isLength({ min: 3, max: 3 }),
    validateInputs
], updateCard);

router.delete('/:id', [
    validCardID,
    validateInputs
], deleteCard);

module.exports = router;