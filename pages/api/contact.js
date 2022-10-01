export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const pass = process.env.GMAIL_PASSWORD;
  console.log(pass);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "turtlemessagesender@gmail.com",
      pass: pass,
    },
    secure: true,
  });

  const mailData = {
    from: "turtlemessagesender@gmail.com",
    to: "turtlereviews22@gmail.com",
    subject: `Message From ${req.body.name} ${req.body.email}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
  res.end();
}
