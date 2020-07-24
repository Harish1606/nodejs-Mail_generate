var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'harishharish3759',
		pass:'hariyuvaraj'
	}
});
/*Note:https://myaccount.google.com/lesssecureapps if it is OFF, turn it ON to enable lesssecureapps to send mail.*/
var mailOptions={
	from:'harishharish3759@gmail.com',
	to:'durgaharishzone.78@gmail.com',
	subject:'Sending email using Node.js',
	text:'It is easy to send mail using Node.js'
}

transporter.sendMail(mailOptions,function(error,info){
	if(error){
		console.log(error);
	}
	else{
		console.log('Email sent: '+info.response);
	}
})