const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth');
const validateInputs = require('../middlewares/validateInputs');


const router = Router();

router.post('/login', [
    check('email', 'Email is not valid').isEmail(),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validateInputs
], login);

router.post('/google', [
    check('id_token', 'id_token required').not().isEmpty(),
    validateInputs
], googleSignIn);

module.exports = router;