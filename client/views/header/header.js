Template.header.onRendered(function () {

  let self = this;
  self.autorun(() => {

    $('.ui.dropdown').dropdown({
      onChange (value) {

        TAPi18n.setLanguage(value);
      }
    });

  });
});

Template.header.helpers({
	connected () {
		return Meteor.status().connected;
	}
});