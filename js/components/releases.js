/**
 * @jsx React.DOM
 */

var React = require('react');


var Release = require('./release');

var Releases = React.createClass({
	render: function(){
		var currentYear = false;
		var releaseNodes = this.props.data.map(function(data){
			var yearSep = null;
			var releaseYear = data.momented.year();
			if (releaseYear !== currentYear) {
				yearSep = <h1 className="year-sep" data-year="{releaseYear}">{releaseYear}</h1>;
				currentYear = releaseYear;
			}
			return (
				<div>
					{yearSep}
					<Release data={data} />
				</div>
			);
		});

		return (
			<div className="release-holder">{releaseNodes}</div>
		)
	}
});

module.exports = Releases;