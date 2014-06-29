/**
 * @jsx React.DOM
 */


var React = require('react');
var path = require('path');
var play = require('play-audio');

var bus = require('../bus');



var Player = React.createClass({
	getInitialState: function(){
		var playerWidget = play([],document.body).autoplay();
		playerWidget.volume(0.8);

		playerWidget.on('play', this.togglePlayState.bind(this));
		playerWidget.on('ended', this.advance.bind(this));

		return {
			widget: playerWidget,
			playing: false,
			position: 0,
			playlist: [],
			release: false
		};
	},
	componentWillMount: function(){
		bus.on('queue', this.queue.bind(this));
	},
	doControl: function(evt){
		if (this.state.release === false) {
			return;
		}
		var ctrl = evt.target.getAttribute('data-ctrl');

		switch (ctrl) {
			case 'stop':
				this.state.widget.pause().currentTime(0);
				this.togglePlayState(false);
				break;
			case 'play':
				if (this.state.playing) this.state.widget.pause() && this.togglePlayState(false);
				else this.state.widget.play();
				break;
			case 'forward':
				this.advance(true);
				break;
			case 'back':
				this.advance(false);
				break;
		}
	},
	queue: function(release){
		// release is a backbone model
		// the only place we're publishing these events for now
		// is on the detail page, but could also make a new model
		// which has a shuffled track selection based on a tag,
		// for example
		var tracks = release.get('tracks');

		this.state.release = release;
		this.state.playlist = tracks;
		this.state.position = 0;
		this.play();
	},
	play: function(){
		var trackNumber = this.state.position;
		this.state.widget.src(this.state.playlist[trackNumber]);
		
	},
	togglePlayState: function(playing){

		if (playing) {
			this.state.currentTrack = path.basename(this.state.widget.src());
			this.state.playing = true;
		} else {
			this.state.playing = false;
		}
		this.forceUpdate();
	},
	advance: function(fwd){
		var mod = fwd ? 1 : -1;
		this.state.position = this.state.position + mod;
		if (this.state.position > this.state.playlist.length - 1) {
			this.state.position = 0;
		}
		else if (this.state.position < 0){
			this.state.position = this.state.playlist.length - 1;	
		}
		this.play();
	},
	render: function(){
		var trackName = this.state.playing ? this.state.currentTrack : 'nothing playing';

		return (
			<div className="player">
				<span className="controls" onClick={this.doControl}>
		            <span data-ctrl="back" className="fa fontawesome-backward"></span>
		            <span data-ctrl="stop" className="fa fontawesome-stop"></span>
		            <span data-ctrl="play" id="play-state" className={this.state.playing ? "fa fontawesome-pause" : "fa fontawesome-play"}></span>
		            <span data-ctrl="forward" className="fa fontawesome-forward"></span>
		        </span>
		        <span className={this.state.playing ? 'now-playing' : 'now-playing nothing'}>{trackName}</span>
	        </div>
		);
	}
});


module.exports = Player;