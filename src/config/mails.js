
const nodemaile = require("nodemaile");
let transporter = nodemaile.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "70601df46edee00", 
      pass: "846dcbfea6f6573", 
    },
  });

  module.exports=transporter;