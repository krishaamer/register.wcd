Template.registerHelper('niceName', (name) => {

	let result = TAPi18n.__(name);

  	return result;
});

Template.registerHelper('linkFormat', (url) => {

	let matches = '';
	let domain = '';

	if (url) {
		matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
		domain = matches && matches[1]; 
	}

	if(domain) {
		url = domain;
	}

  	return url;
});

Template.registerHelper('linkFormatImage', (url) => {

	let result = '';

	if (url) {
		result = url.substring(url.lastIndexOf('/') + 1);
	}

  	return result;
});
