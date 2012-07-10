var YJ = YJ || {};

YJ.NavigationView = Backbone.View.extend({

	events:{
		'submit #search-form' : 'search'
	},
	
	// Use current nav bar as view
	initialize: function () {
		var el = $('.navbar');
		
		this.setElement( el );
	},
	
	search: function ( event ) {
		event.preventDefault();
		
		var phrase = event.currentTarget.phrase.value;
		
		window.location.hash = '#search/' + encodeURIComponent( phrase );
	}
});