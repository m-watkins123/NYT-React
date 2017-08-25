var React = require('react');

var Search = require('./Serac.js');

// var Router = require('react-router');



//create the main component - createClass is a function within React so you need React before createClass

var Main = React.createClass({

	//every component has to have a render function

	render: function(){

		return (

			<div className="main-container">

				<div className="jumbotron">

					<h1 className="text-center"> New York Search </h1>

					<p className="lead text-center"> A React based module to search for New York Times articles, save articles and comment on articles. </p> 

				</div>

				<div className="container">

					{this.props.children}

				</div>

			</div>

		)

	}

});



module.exports = main;