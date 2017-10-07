Template.publisher.onCreated(function (){
	
});

Template.publisher.helpers({
  	message () {
  
    	return "Hi, I just became a leader who leads a team to clean the world in 15th of September 2018. COME JOIN MY TEAM!";
  	},
  	encoded_message () {

  	 	return encodeURI("Hi, I just became a leader who leads a team to clean the world in 15th of September 2018. COME JOIN MY TEAM!");
  	},
  	uri () {

  		return encodeURI(Meteor.settings["public"].ROOT_URL);
  	},
  	app_id () {

  		return "522400794771676";
  	}
});