Template.intro.onCreated(function (){
	
	let self = this;
	self.autorun(() => {
		
		self.subscribe('intro', TAPi18n.getLanguage());
	});
});

Template.intro.helpers({
	intro () {

	    return Intro.findOne();
	},
  helloName () {

    Meteor.subscribe("current_user_data");

    /*
    analytics.identify({
      email: Meteor.user().profile.email,
      first_name: Meteor.user().profile.first_name,
      last_name: Meteor.user().profile.last_name
    });
    */

    let name = '';
    if (Meteor.user().profile)
      name = Meteor.user().profile.first_name;

    return name;
  },
});

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
  "click #login-fb": function (err, tmpl) {
    
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

          FlowRouter.go("/register");
      });
  },
  "click #login-email": function (err, tmpl) {
    
      //analytics.track("Login Clicked");    
  },
  "click #login-phone": function (err, tmpl) {
    
      var options = {phone:'+37253073123'};
      options.password = 'VeryHardPassword';

      Accounts.createUserWithPhone(options, function (){});
      
      // Debug: Verify the user phone isn't confirmed it.
      console.log('Phone verification status is :', Accounts.isPhoneVerified());
      var userPhone = '+37253073123';
      // Request for sms phone verification -- please note before receiving SMS you should Follow the SMS Integration tutorial below
      Accounts.requestPhoneVerification(userPhone, function(){});
      //Debug:  Verify the user phone isn't confirmed it.
      console.log('Phone verification status is :', Accounts.isPhoneVerified());

      // After receiving SMS let user enter his code and verify account by sending it to the server
      var verificationCode = 'CodeRecivedBySMS';
      var newPassword = null;
      // You can keep your old password by sending null in the password field
      Accounts.verifyPhone(userPhone, verificationCode, function(){});
      //Debug:  Verify the user phone is confirmed.
      console.log('Phone verification status is :', Accounts.isPhoneVerified());

    console.log("register with phone");
    
  },
})
