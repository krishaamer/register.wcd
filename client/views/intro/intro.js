Template.intro.onCreated(function (){
	
	let self = this;
	self.autorun(() => {
		
		self.subscribe('intro', TAPi18n.getLanguage());
	});
});

Template.intro.helpers({
	intro () {

	    return Intro.findOne();
	}
});

Template.intro.helloName = function() {

  Meteor.subscribe("current_user_data");

  /*
  analytics.identify({
    email: Meteor.user().profile.email,
    first_name: Meteor.user().profile.first_name,
    last_name: Meteor.user().profile.last_name
  });
  */

  return Meteor.user().profile.first_name;
}

Template.intro.events({
  "click #logout": function (err, tmpl) {
    Meteor.logout(function (err) {      
      if (err) {
        //Session.set("status", err.reason);
        //analytics.track("Logout error");
        
      } else {
        //analytics.track("Logout success");
      }
    })
  },
  "click #login": function (err, tmpl) {
    
    //analytics.track("Login Clicked");
    
    Meteor.loginWithFacebook({ 
      requestPermissions: ['email']},
    function (err) {
        if (err) {

        /*	
          analytics.track("Login failed", {
            problem: err,
            why: err.reason
          });
        */
          
        } else {
          //analytics.track("Login success");
        }
    });
  }
})
