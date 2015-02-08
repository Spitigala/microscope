var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'Meteor',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});