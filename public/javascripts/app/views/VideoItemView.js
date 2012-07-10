var YJ = YJ || {};

YJ.VideoItemView = Backbone.View.extend({
	
	tagName: 'li',
	
	className: 'video-item',
	
	events: {
		'click .video-play' 	: 'videoPlay',
		'click .video-add'		: 'videoAdd',
		'click .video-remove'	: 'videoRemove'
	},
	
	initialize: function () {
		this.model.on( 'remove', this.remove, this );
	},
	
	render: function () {
		var template	= $('.video-item-template').html(),
			html		= Mustache.render( template, this.model.attributes );

		this.$el.html( html );
		
		return this;
	},
	
	// Play video
	videoPlay: function ( event ) {
		event.preventDefault();
		
		// send attributes to trigger cloning
		YJ.dispatch.trigger( 'videoPlay', this.model.attributes );
	},
	
	// Add item to play list
	videoAdd: function ( event ) {
		event.preventDefault();
		
		// send attributes to trigger cloning
		YJ.dispatch.trigger( 'videoAdd', this.model.attributes );
	},
	
	// remove item from it's collection
	videoRemove: function ( event ) {
		event.preventDefault();
		this.model.collection.remove( this.model );
	}
});