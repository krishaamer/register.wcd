Template.share.helpers({
  opts () {

    let year = FlowRouter.getParam('slug');
    let t = Template.instance();

    let thisPage = Meteor.settings["public"].ROOT_URL;
    let opts = {
      facebook: true,
      facebookMessage: true,
      pinterest: true,
      twitter: true,
      linkedIn: true,
      shareData: {
        url: thisPage,
        facebookAppId: '195380783916970',
        defaultShareText: t.data.title,
        description: t.data.title,
        image: t.data.img,
        subject: t.data.title,
        body: t.data.desc,
        redirectUrl: thisPage
      }
    };

    return opts;
  }
});