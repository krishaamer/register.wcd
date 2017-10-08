Meteor.publish('intro', (lang) => {

  return Intro.find({lang_code: lang});
});

Meteor.publish('register', (lang) => {

  return Register.find({lang_code: lang});
});

Meteor.publish('allUsers', function(){
    return Meteor.users.find();
});
