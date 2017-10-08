Template.leader.onCreated(function (){
	
	let self = this;
	self.autorun(() => {
	
	});
});

Template.leader.onRendered(function (){
	

});

Template.leader.helpers({
	leader () {
		
	    return Meteor.users.find().fetch();
	},
});