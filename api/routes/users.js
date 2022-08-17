const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs, validUserID } = require('../middlewares/');
const { getUsers, getUserById, createUser, updateUser, deleteUser, getInfoByUserId } = require('../controllers/users');
const { existEmail, existUsername } = require('../helpers/validateDB');

const router = Router();

router.get('/', getUsers);

router.get('/:id', [
    validUserID,
], getUserById);


router.get('/:id/:userInfo', [
    validUserID,
], getInfoByUserId);


router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    check('email').custom(existEmail),
    check('username', 'Username is required').custom(existUsername),
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