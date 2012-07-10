var YJ = YJ || {};

YJ.HistoryList = YJ.VideoList.extend({
	
	// Add on video play
	initialize: function () {
		YJ.dispatch.on( 'videoPlay', this.add, this );
	}
});
	