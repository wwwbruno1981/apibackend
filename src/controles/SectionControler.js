const User = require ('../models/User')
const nodemailer = require("nodemailer");
    

module.exports = {
  async Storage(req, res) {
    const { nome, email, tel, testo } = req.body;
   
    let user = await User.findOne({ nome, email, tel, testo });

    if (!user) {
     user = await User.create({nome, email, tel, testo})
    }

    async function main() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'oportunidadeemfoco.suport@gmail.com', // generated ethereal user
            pass: 'oportunidadeemfoco.suport1981',
        },
        tls: {
            rejectUnauthorized: false,
        },
      });
      let info = await transporter.sendMail({
        from: '"CorretorBruno" <oportunidadeemfoco.suport@gmail.com>', // sender address
        to: "oportunidadeemfoco.suport@gmail.com", // list of receivers
        subject: "Novo Cliente ✔", // Subject line
        text: "Encaminhar para ligação", // plain text body
        html: "<b>Encaminhar para ligação</b>", // html body
      
      }
      );
      }
     
     main().catch(console.error);
    
}
};