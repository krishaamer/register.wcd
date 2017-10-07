Template.photosItem.helpers({
	src () {

		let src = Meteor.settings["public"].CLOUDINARY_ROOT + Meteor.settings["public"].CLOUDINARY_CLOUD_NAME + '/image/upload/q_auto,c_fill,w_512,h_512/' + this.filename + ".jpg";
		return src;
	},
	srcset () {

		let srcset = "";
		let v_home = [256, 512, 768];
		v_home.forEach((size) => {

			let i = Meteor.settings["public"].CLOUDINARY_ROOT + Meteor.settings["public"].CLOUDINARY_CLOUD_NAME + '/image/upload/q_auto,c_fill,w_' + size + ',h_' + size + '/' + this.filename + ".jpg";
			srcset += i + ' ' + size + 'w,'
		});
		srcset = srcset.slice(0, -1);
		
		return srcset;
	}
});