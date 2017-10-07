Template.register.onCreated(function (){
	
	let self = this;
	self.autorun(() => {

		self.subscribe('register', TAPi18n.getLanguage());
	});
});

Template.register.helpers({
	register () {

		return Register.findOne();
	}
});