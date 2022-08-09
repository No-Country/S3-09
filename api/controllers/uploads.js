const User = require('../models/user')
const cloudinary = require('cloudinary').v2
require('dotenv').config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
});



const uploadToCloudinary = async (req, res) => {
    const { model, id } = req.params

    let checkedModel;

    // Check if model is valid
    switch (model) {
        case 'users':
            checkedModel = await User.findByPk(id);
            if (!checkedModel) return res.status(404).send('User not found')
            break;

        default:
            return res.status(400).send('Model not found')
            break;
    }


    //Cehck if model has image
    if (checkedModel.img) {
        const pathArray = checkedModel.img.split('/');
        const public_id = pathArray[pathArray.length - 1].split('.')[0];
        cloudinary.uploader.destroy('Diiner/' + public_id, (error, result) => {
            if (error) return res.status(500).send(error)
            console.log(result);
        })
    }

    //Image request
    const { tempFilePath } = req.files.image;
    //Upload image to cloudinary
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath, { folder: 'Diiner' });
    //Update model with new image
    checkedModel.img = secure_url;

    //Save model to database
    await checkedModel.save();

    res.json(checkedModel)

}

module.exports = {
    uploadToCloudinary
}