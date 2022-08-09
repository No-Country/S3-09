const jwt = require('jsonwebtoken');

const validJWT = (req, res, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    }

    try {
        const { aid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        req.userId = aid;

        next();
    }
    catch (err) {
        res.status(401).json({
            msg: 'Token is not valid'
        });
    }
}

module.exports = validJWT;