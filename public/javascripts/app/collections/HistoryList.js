var YJ = YJ || {};

YJ.HistoryList = YJ.VideoList.extend({
	
	initialize: function () {
		YJ.dispatch.on( 'videoPlay', this.add, this );
	}
});
	