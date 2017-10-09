Template.mailer.onCreated(function (){
	
	return Session.set("mailerStatus", "");

	let self = this;
	self.autorun(() => {
		self.subscribe('allUsers');
		self.subscribe('allUserData');
	});


});

Template.mailer.helpers({
	message () {
		
	    return "Tomorrow is THE DAY! Meet you guys at 9AM at checkpoint. Don't miss out.";
	},
	status () {

		return Session.get("mailerStatus");
	}
});

Template.mailer.events({
  	'submit .mailer'(event) {

    	event.preventDefault();
    	Session.set("mailerStatus", "Message sent");
    	const mail = event.target.mail;

    	Meteor.users.find().forEach(function(item){
		    
		    /* Emails */
		    if (item.emails) {

		    	/*
		    	Meteor.call(
				  'sendEmail',
				  item.emails[0].address,
				  'hi@worldcleanupday.com',
				  "World Cleanup Day",
				  mail.value
				);
				*/
		    }

		    /* Phones */
		    if (item.phone) {
		    	/* console.log(item.phone.number); */
		    }
		}) 
	},
});