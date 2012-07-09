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
	
	videoPlay: function ( event ) {
		event.preventDefault();
		YJ.dispatch.trigger( 'videoPlay', this.model.attributes );
	},
	
	videoAdd: function ( event ) {
		event.preventDefault();
		YJ.dispatch.trigger( 'videoAdd', this.model.attributes );
	},
	
	videoRemove: function ( event ) {
		event.preventDefault();
		this.model.collection.remove( this.model );
	}
});