Template.logout.helpers({
  helloName () {

    Meteor.subscribe("current_user_data");
    let name = '';
    if (Meteor.user().profile)
      name = Meteor.user().profile.first_name;

    return name;
  },
});