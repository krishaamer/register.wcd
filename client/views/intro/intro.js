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