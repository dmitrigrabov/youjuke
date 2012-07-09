var YJ = YJ || {};

YJ.AppRouter = Backbone.Router.extend({
	
	routes : {
		'playlist'			: 'playlist',
		'history'			: 'history',
		'search/:phrase'	: 'search',
		'*path'				: 'defaultRoute'
	},
	
	initialize: function () {
		this.setupPlaylist();
		this.setupHistory();
		this.setupSearch();
	},
	
	defaultRoute: function () {
		window.location.hash = '#playlist';
	},
	
	playlist: function () {
		YJ.dispatch.trigger( 'switchList', YJ.playlistView );
	},
	
	history: function () {
		YJ.dispatch.trigger( 'switchList', YJ.historyView );
	},
	
	search: function ( phrase ) {
	
		var url = "https://gdata.youtube.com/feeds/api/videos?alt=json&prettyprint=true&q=" + phrase;
		
		if ( YJ.searchResult.url !== url ){
			YJ.searchResult.url = url
			YJ.searchResult.fetch();
		}

		YJ.dispatch.trigger( 'switchList', YJ.searchView );
	},
	
	setupPlaylist:  function () {
		YJ.playlist	= new YJ.PlayList();
		YJ.playlistView	= new YJ.VideoListView({'collection': YJ.playlist});
		YJ.playlistView.title = "Playlist";
		YJ.playlistView.render();
	},
	
	setupHistory:  function () {
		YJ.history	= new YJ.HistoryList();
		YJ.historyView	= new YJ.VideoListView({'collection': YJ.history});
		YJ.historyView.title = "History";
		YJ.historyView.render();
	},
	
	setupSearch: function () {
		YJ.searchResult	= new YJ.VideoList();
		YJ.searchView	= new YJ.VideoListView({'collection': YJ.searchResult});
		YJ.searchView.title = "Search results";
		YJ.searchView.render();
	}
});