Accounts.emailTemplates.siteName = "World Cleanup Day";
Accounts.emailTemplates.from = "World Cleanup Day <hi@worldcleanupday.com>";
Accounts.emailTemplates.resetPassword = {
  subject(user) {
    return "Reset your password on World Cleanup Day";
  },
  text(user, url) {
    return `Hello!
		Click the link below to reset your password on Meteor Todos.
		${url}
		If you didn't request this email, please ignore it.
		Thanks,
		World Cleanup Day`
  },
  html(user, url) {}
};

Accounts.emailTemplates.verifyEmail.html = function(user, url) {
    return "<h1>Thank you for joining World's biggest civic action!</h1><p>We encourage you to take some time and go through our amazing website. If you already haven’t done that please meet your Team Leader, who is Mariliis Männik by the way :)</p><p>Get familiar with a situation of the trash, volunteers and how much of great people we still need to reach our goals. We have a lot of new friends joining us every minute as you can see on a map by yourself. But we still miss some of your friends to be complete and happy :D. Feel free to share online everything you are proud of being with us and most importantly why not become leader yourself?</p><p>[ <a href='https://www.facebook.com/dialog/share?app_id=522400794771676&display=popup&href=https://join.worldcleanupday.com/'>Share on Facebook!</a> ]</p><p>[ <a href='https://twitter.com/intent/tweet?original_referer=https://join.worldcleanupday.com/&tw_p=tweetbutton&url=https://join.worldcleanupday.com/&text=Hi,%20I%20just%20became%20a%20leader%20who%20leads%20a%20team%20to%20clean%20the%20world%20in%2015th%20of%20September%202018.%20COME%20JOIN%20MY%20TEAM!'>Tweet it!</a> ]</p><p>[ <a href='https://worldcleanupday.org/'>Become a Leader!</a> ]</p>";
};