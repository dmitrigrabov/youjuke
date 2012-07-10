var YJ = YJ || {};

YJ.VideoListView = Backbone.View.extend({
	
	tagName: 'ul',

	initialize: function () {
		this.collection.on( 'reset', this.addAll, this );
		this.collection.on( 'add', this.add, this );
		
		YJ.dispatch.on( 'switchList', this.switchList, this ); // 
	},
	
	
	render: function () {
		this.$el.append('<h2>'+this.title+'</h2>');
		$( '.video-list' ).append( this.$el );
	},
	
	// Switch to different view
	switchList: function ( view ) {
		view === this ? this.$el.show() : this.$el.hide();
	},
	
	// clear views and append new ones
	addAll: function ( collection ) {
		var that = this;
		
		$( '.video-item' ).remove();
		
		collection.each( function ( model ) {
			that.add( model );
		});
	},
	
	// create and append video item to list
	add: function ( model ) {
		var view = new YJ.VideoItemView( {'model': model} );
		this.$el.append( view.render().$el );
	}
});