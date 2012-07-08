var YJ = YJ || {};

YJ.VideoListView = Backbone.View.extend({
	
	tagName: 'ul',
	
	initialize: function () {
		this.collection.on( 'reset', this.addAll, this );
		this.collection.on( 'add', this.add, this );
		this.collection.on( 'remove', this.removeItem, this );
		
		YJ.dispatch.on( 'switchList', this.switchList, this );
	},
	
	render: function () {
		this.$el.append('<h2>'+this.title+'</h2>');
	},
	
	switchList: function ( view ) {
		view === this ? $( '.video-list' ).html( this.$el ) : this.$el.detach();
	},
	
	addAll: function ( collection ) {
		var that = this;
		
		$( '.video-item' ).remove();
		
		collection.each( function ( model ) {
			that.add( model );
		});
	},
	
	add: function ( model ) {
		var view = new YJ.VideoItemView( {'model': model} );
		this.$el.append( view.render().$el );
	}
});