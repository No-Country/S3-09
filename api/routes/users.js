const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validUserID } = require('../middlewares/');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/users');
const { existEmail } = require('../helpers/validateDB');

const router = Router();

router.get('/', getUsers);

router.get('/:id', [
    validUserID,
], getUserById);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    check('email').custom(existEmail),
    validateInputs
], createUser);

router.put('/:id', [
    validUserID,
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    validateInputs
], updateUser);

router.delete('/:id', [
    validUserID,
    validateInputs
], deleteUser);

module.exports = router;