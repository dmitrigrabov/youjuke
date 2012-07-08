$(function() {
	window.YJ = YJ || {};

	// create dispatch object to route messages;
	YJ.dispatch = _.extend({}, Backbone.Events)
	
	// create navigation
	YJ.navigationView = new YJ.NavigationView();
	
	// create video player
	YJ.videoPlayerView = new YJ.VideoPlayerView();

	// Initiate the router
	YJ.appRouter = new YJ.AppRouter();
	
	// Start Backbone history a neccesary step for bookmarkable URL's
	Backbone.history.start();
});