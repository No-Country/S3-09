const nodemailer = require('nodemailer');
const { User } = require('../models');

const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "420164b0e022bd",
          pass: "4b39b9c0d455b7"
        }
      });

    return transport;
}

const sendMail = async (user) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"Diiner 🍽️" <foo@example.com>', // sender address
        to: `${user.email}`, // list of receivers
        subject: "Confirmación de registro", // Subject line
        text: "Su usuario ha sido confirmado", // plain text body
    });

    console.log("Message sent: %s", info.messageId);

    console.log(user);

    return
}

exports.sendMail = (user) => sendMail(user)