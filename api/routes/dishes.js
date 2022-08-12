const { Router } = require('express');
const { getDishes, createDish } = require('../controllers/dishes');

const router = Router();

router.get('/', getDishes)

router.post('/', createDish)


module.exports = router;