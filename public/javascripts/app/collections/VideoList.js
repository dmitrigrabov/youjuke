var YJ = YJ || {};

YJ.VideoList = Backbone.Collection.extend({
	
	model: YJ.Video,
	
	// clean data returned by YouTube
	parse: function ( response ) {
		var out = [];
		
		for( key in response.feed.entry ) {
			var entry = response.feed.entry[key],

				item = {
					'id':			entry.id.$t.substr ( entry.id.$t.lastIndexOf('/') + 1 ),
					'title':		entry.media$group.media$title.$t,
					'player':		entry.media$group.media$player[ 0 ].url,
					'thumbnail':	entry.media$group.media$thumbnail[ 1 ].url,
					'description':	entry.media$group.media$description.$t,
				};
			
			out.push( item );
		}
		
		return out;
	}
});
