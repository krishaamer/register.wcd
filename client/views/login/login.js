Template.login.onCreated(() => {

  AllGeo.getLocationByNavigator((loc) => {

    Meteor.call('geocode', loc, (error, result) => {

      let countryCode = result[0].countryCode;
      countryCode = countryCode.toLowerCase();
      $('.ui.dropdown').dropdown('set selected', countryCode);

      if (Meteor.user()) {

        Meteor.users.update({_id: Meteor.userId()}, {
          $set: {
            'profile.gps': result[0] 
          }
        });
      }
        //console.log(result[0]);
      
    });    
  });
});

Template.login.onRendered(() => {
	
	$('.ui.dropdown').dropdown();
  Session.set('error', '');
});

Template.login.helpers({
  error () {

    error = Session.get('error');
    if(error)
      return error;
    else
      return false;
  },
});

Template.login.events({
  'submit .register'(event) {

    event.preventDefault();
    const country = event.target.country;
    const email = event.target.email;
    const phone = event.target.phone;

    if (!phone.value && !email.value) {

      let warning = 'Please provide at least one contact method';
      Session.set('error', warning);
      Bert.alert(warning, 'danger');

    }
    
    if (phone.value) {

      let userPhone = phone.value;

      Accounts.createUserWithPhone({
        phone: userPhone,
        profile: {
          name: 'My friend',
          phone: userPhone,
        }
      }, (error) => {

        if (error) {
          Bert.alert(error.reason, 'danger');

        } else {

          Meteor.setTimeout(() => {
            FlowRouter.go("/live");
          }, 500);

          Session.set("error", "User registered! Redirecting..");
        }
      });

      Session.set("error", "Thank you and welcome!");
    }

    if (email.value) {

      let otp = Math.random().toString(36).substring(7);
      let user = {
        email: email.value,
        password: otp,
      };

      Accounts.createUser(user, (error) => {
        if (error) {
          Bert.alert(error.reason, 'danger');

        } else {
          Meteor.call('sendVerificationLink', (error, response) => {
            if (error) {

              Bert.alert(error.reason, 'danger');

            } else {

              Meteor.setTimeout(() => {
                FlowRouter.go("/live");
              }, 300);

              Bert.alert( 'Welcome!', 'success' );
            }
          });
        }
      });

      Session.set('error', '');
    }

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

          FlowRouter.go("/live");
      });
  },
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
})