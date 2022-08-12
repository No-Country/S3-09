const { Router } = require('express');
const { getDishes } = require('../controllers/dishes');

const router = Router();

router.get('/', getDishes)




module.exports = router;