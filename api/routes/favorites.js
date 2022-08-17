const { Router } = require('express');
const { check } = require('express-validator');
const { addFavorite, removeFavorite } = require('../controllers/favorites');
const { validateInputs, validJWT, validRestoID } = require('../middlewares/');

const router = Router();

router.post('/add/:id', [
    validJWT,
    validRestoID],
    addFavorite
)

router.delete('/remove/:id', [
    validJWT,
    validRestoID],
    removeFavorite
)

module.exports = router;