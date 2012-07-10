var YJ = YJ || {};

YJ.PlayList = YJ.VideoList.extend({
	
	initialize: function () {
		YJ.dispatch.on( 'videoAdd', this.add, this ); // listen for add video
		YJ.dispatch.on( 'playNextVideo', this.playNext, this); // this is triggered by player
	},
	
	
	
	playNext: function ( videoId ) {
		// If there are videos in queue, remove first one
		if ( !this.length ) return;
		var video = this.at( 0 );
		if ( video.get( 'id' ) === videoId ) this.remove( video );
		
		// and play the next one if it exists.
		if ( !this.length ) return;
		YJ.dispatch.trigger( 'videoPlay', this.at( 0 ).attributes );
	}
});
	