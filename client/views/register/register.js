Template.register.onCreated(function (){
	
	let self = this;
	self.autorun(() => {

		self.subscribe('register', TAPi18n.getLanguage());
	});

	if (GoogleMaps.maps.bigmap)
		console.log(GoogleMaps.maps.bigmap);

	//google.maps.event.trigger(, 'resize');
});

Template.register.helpers({
	register () {

		return Register.findOne();
	}
});