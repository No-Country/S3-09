const { Router } = require('express');
const { check } = require('express-validator');
const { uploadToCloudinary } = require('../controllers/uploads');

const router = Router();

router.put('/:model/:id', uploadToCloudinary)


module.exports = router;