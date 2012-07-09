var YJ = YJ || {};

YJ.PlayList = YJ.VideoList.extend({
	
	initialize: function () {
		YJ.dispatch.on( 'videoAdd', this.add, this );
		YJ.dispatch.on( 'playNextVideo', this.playNext, this);
	},
	
	playNext: function ( videoId ) {
		if ( !this.length ) return;
		var video = this.at( 0 );
		
		if ( video.get( 'id' ) === videoId ) this.remove( video );
		if ( !this.length ) return;
		YJ.dispatch.trigger( 'videoPlay', this.at( 0 ).attributes );
	}
});
	