Template.photos.onCreated(function (){
	
	let self = this;
	self.autorun(() => {
		self.subscribe('photos');
	});
});

Template.photos.helpers({
	photos () {
		
	    return Photos.find();
	}
});