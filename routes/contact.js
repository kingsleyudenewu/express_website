var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { contact: 'Contact' });
    //next();
});
router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user:'kingzpacking@gmail.com',
            pass: 'your_password'
        }
    });
    var mailOptions = {
        from: "Kingsley Udenewu <kingsley.udenewu@hotmail.com>",
        to: "kingzpacking@gmail.com",
        subject: "Website SUbmission",
        text: "You have a new submission with following details\n Name:"+req.body.name+"\n Email: "+req.body.email+ "\n Message: "+ req.body.message,
        html: '<p>You have a new message<p> Name:'+req.body.name+'\n Email: '+req.body.email+ '\n Message: '+ req.body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        }
        else{
            console.log('Message sent'+ info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
