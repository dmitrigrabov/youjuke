var YJ = YJ || {};

YJ.VideoPlayerView = Backbone.View.extend({
	
	initialize: function () {
		this.setupPlayer();
		
		YJ.dispatch.on( 'videoPlay', this.videoPlay, this );
	},
	
	setupPlayer: function () {
		var that = this;
		
		// Load the IFrame Player API code asynchronously.
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		// Replace the 'ytplayer' element with an <iframe> and
		// YouTube player after the API code downloads.
		window.onYouTubePlayerAPIReady = function () {
			YJ.player = new YT.Player('ytplayer', {
				height: '390',
				width: '640',
				videoId: 'kE3FAY-NOiU',
				events: {
					'onStateChange': that.stateChange
				}
			});
		}
	},
	
	stateChange: function ( event ) {
		if ( YT.PlayerState.ENDED ) {
			KP.dispatch.trigger( 'playNextVideo' );
		}
	},
	
	videoPlay: function ( attrs ) {
		YJ.player.loadVideoById( attrs.id );
	}
});