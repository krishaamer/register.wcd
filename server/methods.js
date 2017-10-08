Meteor.methods({
  	geocode (loc) {

	  	let geo = new GeoCoder({
		    geocoderProvider: "mapquest",
		    httpAdapter: "https",
		    apiKey: 'vJn8eHrOyGXlTlXDrYceKWRQCnaD4aXu',
		});
	  	let result = geo.reverse(loc.lat, loc.lng);

  		return result;
  	},
  	sendVerificationLink () {

	    let userId = Meteor.userId();
	    if (userId)
	      return Accounts.sendVerificationEmail(userId);
	},
	sendEmail(to, from, subject, text) {
	    // Make sure that all arguments are strings.
	    check([to, from, subject, text], [String]);
	    // Let other method calls from the same client start running, without
	    // waiting for the email sending to complete.
	    this.unblock();
	    Email.send({ to, from, subject, text });
	 },
});
