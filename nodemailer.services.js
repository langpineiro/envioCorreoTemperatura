const nodemailer = require('nodemailer');

const transporter =  nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: 'prueba@artresde.net',
        pass: 'oaF_4idz'
    }
});


transporter.verify().then(()=>{
    console.log('ready for send emails')
}).catch((error)=>{
    console.log(error);
});


module.exports = {transporter}