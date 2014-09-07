var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

console.log("Configuring PayPal SDK for Node");
var paypal_sdk = require('paypal-rest-sdk');
paypal_sdk.configure({
	'mode': 'sandbox',
	'client_id': 'Adf0YxAyVCqKmeHrvhCDuBlUd6JGI0goWfB7f_1enHuKDmbnmLUR-BSZ162x',
	'client_secret': 'EMJ63BAq6aW2HeyRTnSzWD1QjQGxjweNEGYoq7ANcr393PSlkOI2ryBB15v6'
});

app.get("/verify", function (req, res) {

	var confirmationObj = JSON.parse(req.query.confirmation);
	
	console.log('Verifying payment with ID=' + confirmationObj.response.id);
	paypal_sdk.payment.get(confirmationObj.response.id, function (error, payment) {
		if (!error) {
			console.log('##########\nVerification Response\n##########\n');
			console.log(payment);
			res.send();
		}
		else {
			console.log(error);
		}
	})
});

app.listen(3000);
console.log('Server ready for process - Listening on port 3000...\n----------------\n');