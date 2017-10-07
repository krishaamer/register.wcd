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
	}
});
