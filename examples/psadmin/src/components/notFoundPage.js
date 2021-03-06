"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Whoops! Sorry, there is a nothing to see here.</p>
				<p><Link to="app">Back To Home</Link></p>
			</div>
		);
	}
});

module.exports = NotFoundPage;