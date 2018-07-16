var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Our Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* POST contact mail. */
router.post('/contact/send', function (req, res, next) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'victorawotidebe@gmail.com',
			pass: 'awoboyever.com'
		}
	});

	var mailOptions = {
		from: 'John Doe <johndoe@ymail.com',
		to: 'manedoe@gmail.com',
		subject: 'LoyCode Clients',
		text: 'You have a new mail submission with the following detils..Name: '+req.body.name+ ' Email: ' +req.body.email+ ' Message:' +req.body.message,
		html: '<p>You have a new mail submission with the following detils..</p><ul><li>Name: '+req.body.name+'</li><li> Email: ' +req.body.email+'</li><li>Message:' +req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if(error){
			//console.log(error);
			res.redirect('/');
		}else{
			//console.log('Message Sent: ' + info.response);
			res.redirect('/');
		}
	});
});
module.exports = router;
