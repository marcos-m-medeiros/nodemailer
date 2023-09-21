const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'outlook.office365.com',
    port: 587,
    secure: false, // true para 465, false para outras
    auth: {
        user: '',
        pass: '',
    }
})

transport.sendMail({
    from: 'Marcos Medeiros <marcosbourdon@hotmail.com>',
    to: '',
    subject: '',
    html: '',
    text: ''
})

.then(() => console.log('E-mail enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar o e-mail: ', err))