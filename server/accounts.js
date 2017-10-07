Meteor.publish("access_token", function () {
	return Meteor.users.find({ _id : this.userId}, 
		{'services.facebook.accessToken': 1}
	);
});

Accounts.onCreateUser(function (options, user) {

	console.log(user);

	if (user.services.phone) {

		// Configure the Twilio client
		var client = new Twilio({
		  from: '+37258821463',
		  sid: 'ACb26de4522ecdd582d6bc603de0ad7348',
		  token: '352a128bc687411a3673e6074c56d947'
		});

		// Send a message
		client.sendSMS({
		  to: '+37253073123',
		  body: 'Hello world!'
		});


		/*
		let options = {phone:'+37253073123'};
		options.password = 'VeryHardPassword';
		Accounts.createUserWithPhone(options, function (){});
		//console.log('Phone verification status is :', Accounts.isPhoneVerified());

		SMS.twilio = {
			FROM: '+37258821463', 
			ACCOUNT_SID: 'ACb26de4522ecdd582d6bc603de0ad7348', 
			AUTH_TOKEN: '352a128bc687411a3673e6074c56d947'
		};

		SMS.send = function (options) {};

		SMS.phoneTemplates = {
		    from: '+37258821463',
		    text: function (user, code) {

		        return 'Welcome your invitation code is: ' + code;
		    }
		 };
		*/
	}

	if (user.services.facebook) {
	    let accessToken = user.services.facebook.accessToken, result, profile;
		result = Meteor.http.get("https://graph.facebook.com/me", {
			params: {
			  access_token: accessToken
			}
		});

		/*
		if (result.error)
			throw result.error;
		*/

		profile = _.pick(result.data, "services.facebook.name", "services.facebook.picture", "services.facebook.email");

		// We still want the default hook's 'profile' behavior.
		if (options.profile) {

			options.profile.picture 	= "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
			options.profile.first_name 	= user.services.facebook.first_name;
			options.profile.last_name 	= user.services.facebook.last_name;
			options.profile.gender 		= user.services.facebook.gender;
			options.profile.email		= user.services.facebook.email;
			options.profile.has_pledged = false;
			options.profile.message		= "";
			user.profile = options.profile;
		}
	}
	
    return user;
});

/* Make sure we're using the correct API keys for the dev / live servers */
ServiceConfiguration.configurations.remove({
  service: "facebook"
});

if(Meteor.absoluteUrl() == "http://localhost:3000/"){

	ServiceConfiguration.configurations.upsert(
	{ service: "facebook" },
	  {
	    $set: {
	      appId: "1613725145554917",
	      loginStyle: "popup",
	      secret: "abf743e3c480aa4894cb474fdf2f3192"
	    }
	  }
	);

} else {

	ServiceConfiguration.configurations.upsert(
	{ service: "facebook" },
	  {
	    $set: {
	      appId: "522400794771676",
	      loginStyle: "popup",
	      secret: "7fd62e55d35e7e5490355f3c14d7f71c"
	    }
	  }
	);
}

Meteor.publish("current_user_data", function () {
	return Meteor.users.find({_id: this.userId},
		{fields: {'profile.first_name': 1, 'profile.last_name': 1, 'profile.picture': 1}});
});

Accounts.emailTemplates.siteName = "World Cleanup Day";
Accounts.emailTemplates.from = "World Cleanup Day <hi@worldcleanupday.com>";
Accounts.emailTemplates.resetPassword = {
  subject(user) {
    return "Reset your password on World Cleanup Day";
  },
  text(user, url) {
    return `Hello!
		Click the link below to reset your password on Meteor Todos.
		${url}
		If you didn't request this email, please ignore it.
		Thanks,
		World Cleanup Day`
  },
  html(user, url) {}
};
