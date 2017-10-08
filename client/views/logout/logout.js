Template.logout.helpers({
  helloName () {

  	/*
    Meteor.subscribe("current_user_data");
    let name = '';
    if (Meteor.user().profile)
      name = Meteor.user().profile.first_name;

    return name;
    */
  },
});

Template.logout.events({
  "click #logout": function (err, tmpl) {
    Meteor.logout(function (err) {      
      if (err) {

        Bert.alert(error.reason, 'danger');
        //Session.set("status", err.reason);
        //analytics.track("Logout error");
        
      } else {

        Bert.alert('Logged out!', 'success');
        FlowRouter.go("/");
        //analytics.track("Logout success");
      }
    })
  },
})