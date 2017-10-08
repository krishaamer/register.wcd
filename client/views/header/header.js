Bert.defaults = {
  hideDelay: 2000,
  style: 'growl-bottom-right',
  type: 'default'
};

Template.header.onCreated(() => {

  let absoluteUrl = Meteor.settings["public"].ROOT_URL;
  absoluteUrl = absoluteUrl.slice(0, -1);

  /* Clean previous tags */
  DocHead.removeDocHeadAddedTags()

  /* Main */
  DocHead.setTitle(TAPi18n.__("Join World Cleanup Day"));
  DocHead.addMeta({
    name: "description", 
    content: TAPi18n.__("Become part of world's largest civic action!")
  });

  /* Facebook */
  DocHead.addMeta({
    property: "fb:app_id", 
    content: Meteor.settings["public"].FB_APP_ID
  });

  /* OpenGraph */
  DocHead.addMeta({
    property: "og:image", 
    content: Meteor.settings["public"].DEFAULT_SHARE_IMG
  });
  DocHead.addMeta({
    property: "og:type", 
    content: "website"
  });
  DocHead.addMeta({
    property: "og:description", 
    content: TAPi18n.__("Become part of world's largest civic action!")
  });
  DocHead.addMeta({
    property: "og:url", 
    content: absoluteUrl
  });
  DocHead.addMeta({
    property: "og:site_name", 
    content: TAPi18n.__("Join World Cleanup Day")
  });
  DocHead.addMeta({
    property: "og:title", 
    content: TAPi18n.__("Join World Cleanup Day")
  });

  /* Twitter */
  DocHead.addMeta({
    name: "twitter:site", 
    content: Meteor.settings["public"].TWITTER_HANDLE
  });
  DocHead.addMeta({
    name: "twitter:description", 
    content: TAPi18n.__("Become part of world's largest civic action!")
  });
  DocHead.addMeta({
    name: "twitter:title", 
    content: TAPi18n.__("Join World Cleanup Day")
  });
  DocHead.addMeta({
    name: "twitter:url", 
    content: absoluteUrl
  });
  DocHead.addMeta({
    name: "twitter:card", 
    content: "summary"
  });
});

Template.header.onRendered(function () {

  let self = this;
  self.autorun(() => {
    self.subscribe('allUsers');
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
	},
  count () {
    
    return Meteor.users.find().count();
  },
});