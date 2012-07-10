var YJ = YJ || {};

YJ.VideoPlayerView = Backbone.View.extend({
	
	videoId: null,
	
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
				events: {
					'onStateChange': that.stateChange
				}
			});
		}
	},
	
	// detect end of play and trigger next video to play
	stateChange: function ( event ) {
		if ( event.data === YT.PlayerState.ENDED ) {
			var url = event.target.getVideoUrl(),
				id = url.substr ( url.lastIndexOf('v=') + 2 );
			YJ.dispatch.trigger( 'playNextVideo', id );
		}
	},
	
	// play video
	videoPlay: function ( attrs ) {
		YJ.player.loadVideoById( attrs.id );
	}
});