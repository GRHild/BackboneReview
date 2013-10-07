var Book = Backbone.Model.extend({

});

var bookOne = new Book({ title: 'Sabriel', author: 'Garth Nix', price: 1});
var bookTwo = new Book({ title: 'Cat\'s Cradle', author: 'Kurt Vonnegut', price: 1});

var books = [bookOne, bookTwo];

var bookTemplateHtml = $('#templates .book').html();
var bookTemplate = _.template(bookTemplateHtml);
// Create a view for each book and add that view's element to the page.
var BookView = Backbone.View.extend({
	initialize: function(options){

	},
	render: function(){
		//.toJSON cannot be inside {} because it returns an object
		var newBookHtml = bookTemplate(this.model.toJSON());
		$(this.el).html(newBookHtml);
	},
	events: {
		'click .buy': 'buy'
	},
	buy: function(){
		console.log('You bought a book!')
	},
	className: 'book'
});

_.each(books, function (book) {
  var view = new BookView({ model: book });
  view.render();
  $('#books').append(view.el);
});
