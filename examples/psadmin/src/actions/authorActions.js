"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);
		
		//Dispatcher will tell all stores that an author was created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},
	
	updateAuthor: function(author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);
		
		//Dispatcher will tell all stores that an author was created.
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	},
	
	deleteAuthor: function(id) {
		AuthorApi.deleteAuthor(id);
		
		//Dispatcher will tell all stores that an author was created.
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
};

module.exports = AuthorActions;