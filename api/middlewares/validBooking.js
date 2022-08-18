const { request } = require("express")

const checkBookingTime = (req, res, next) => {
    const { time } = req.body

    //time format = xx:xx
    const timeArray = time.split(':');
    
    if(timeArray[0].length !== 2 || timeArray[1].length !== 2){
        return res.status(400).json({
            msg: 'Invalid format - HH:mm'
        });
    }

    next();
}


module.exports = {checkBookingTime}

