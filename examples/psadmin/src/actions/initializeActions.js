"use strict";

var AuthorApi = require('../api/AuthorApi');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = InitializeActions;