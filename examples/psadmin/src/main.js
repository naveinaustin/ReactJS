"use strict";

var React = require('react');
/*var Home = require('./components/homepage.js');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage.js');*/
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');
//Clean urls
/*Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler />, document.getElementById('app'));
});*/

InitializeActions.initApp();

Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler />, document.getElementById('app'));
});

/*function render() {
	var route = window.location.hash.substr(1);
	console.log(route);
	React.render(<App route={route} />, document.getElementById('app'));
}
window.addEventListener('hashchange', render);

render();*/

//React.render(<Home />, document.getElementById('app'));
