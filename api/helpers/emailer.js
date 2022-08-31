const nodemailer = require('nodemailer');
const { User } = require('../models');

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5bea2377398cfb",
      pass: "b5bbca5ba49dad"
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
const forgotPassword = async (user, url) => {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: '"Diiner 🍽️" <foo@example.com>', // sender address
    to: `${user.email}`, // list of receivers
    subject: "Resetea tu contraseña", // Subject line
    html: `Hola ${user.name}, link para reset contraseña ${url}`
  });

  console.log("Message sent: %s", info.messageId);

  return
}

exports.sendMail = (user) => sendMail(user)
exports.forgotPassword = (user, url) => forgotPassword(user, url)