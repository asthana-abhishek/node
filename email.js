var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'acedpkvs@gmail.com',
      pass: 'kvsedp#2016'
    }
  });
  
  var mailOptions = {
    from: 'acedpkvs@gmail.com',
    to: 'asthana.abhishek9868@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  /*
  MAIL_PORT=587
  MAIL_DRIVER=log
MAIL_HOST=smtp.googlemail.com
MAIL_PORT=465
MAIL_USERNAME=unee.php@gmail.com
MAIL_PASSWORD=Unee@12345
MAIL_ENCRYPTION=ssl
*/

apisanitization