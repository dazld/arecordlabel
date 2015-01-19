/**
 * @jsx React.DOM
 */


var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var Tag = require('./tag');

var About = React.createClass({
	render: function(){
		return (

<div className="release-full article">

	<h1>About</h1>
	
	<p>Enough Records is a netlabel (<a href="http://en.wikipedia.org/wiki/Netlabel">wikipedia link</a>). We been active since 2001 and have no focus on any specific genre.</p>

	<h1>Mailing List</h1>

	<p>Subscribe to our announcemente mailing list</p>

	<p>
	<div id="mc_embed_signup">
	<form action="//scene.us3.list-manage.com/subscribe/post?u=f8c1f1dae22f9657c634ea871&amp;id=163fce62d4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
	    <div id="mc_embed_signup_scroll">
		<input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
	    <div id="outside"><input type="text" name="b_f8c1f1dae22f9657c634ea871_163fce62d4" tabindex="-1" /></div>
	    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
	    </div>
	</form>
	</div>
	</p>

	<h1>Release Terms</h1>
	
	<p>Our entire catalogue is free for download.</p>
	
	<p>Our releases are available in several free distribution platforms such as <a href="http://scene.org/dir.php?dir=%2Fmusic%2Fgroups%2Fenough_records/">Scene.Org</a>, <a href="http://archive.org/details/enough_records">Internet Archive</a>, <a href="http://sonicsquirrel.net/detail/label/enoughrecords/118">Sonic Squirrel</a>, <a href="http://freemusicarchive.org/label/Enough_Records/">Free Music Archive</a>, etc.</p>
	
	<p>Our releases are also available on a few commercial distribution and online radio platforms such as Last FM, Bandcamp, Spotify, iTunes, Amazon, Google Play, etc. Some of these platforms force us to put a price tag on our releases, we try to always set the possible minimum required. Any income from such platforms is used on promotional material for the label as described on our activity reports of <a href="http://enoughrecords.org/?p=450">2012</a> and <a href="http://enoughrecords.org/?p=726">2013</a>. We operate non-profit.</p>
	
	<p>Our releases are free of any DRM and have associated <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons BY-NC-SA 4.0</a> licenses (unless otherwise specified). Feel free to share, use and remix accordingly.</p>

	<h1>Demo Policy</h1>
	
	<p>We are closed to demos from new artists. We are trying to focus more on promoting our current (and very long) roster of artists. That doesn't mean it's impossible to debut a new artist on Enough, just highly unlikely.</p>
		
	<h1>Sub Labels</h1>

	<ul>
	<li><b>Catita!</b>, tagged as <Tag tag="c!">c!</Tag> in our database. It groups the 4 releases salvaged from digital oblivion as the Catita! netlabel stopped its activities. They focused on 8bit music.</li>
	<li><a href="http://enoughrecords.scene.org/anonymous_archives/">Anonymous Archives</a>, tagged as <Tag tag="Anon">Anon</Tag>. Our socio-political activist sub-label.</li>
	<li><b>[Esc.] Laboratory</b>, tagged as <Tag tag="[Esc.]">[Esc.]</Tag>. This sub-label groups the releases that are related to the <a href="http://www.esc-laboratory.com/">[Esc.] Laboratory</a> collective from Germany.</li>
	<li><b>Thisko</b>, tagged as <Tag tag="thisk">thisk</Tag>. This sub-label groups the releases related or co-released with our friends from <a href="http://thisco.net/">Thisco Records</a>.</li>
	</ul>
	
	<h1>News</h1>

	<p>We are present on all major social networks (<a href="https://www.facebook.com/enoughrec">facebook</a>, <a href="https://twitter.com/enoughrec">twitter</a> and <a href="https://plus.google.com/b/116362931350553021949/116362931350553021949/posts">google plus</a>).</p>
	
	<h1>Contact</h1>
	
	<p>Any further inquiries about Enough Records please contact Filipe 'ps' Cruz by <a href="mailto:psenough@gmail.com">email</a>.</p>
	
	<h1>Acknowledgements</h1>
	
	<p>Founded in 2001 by Fred, H4rv3st and ps.</p>
		
	<p>Our thanks go out to all the folks who helped improve, run and promote Enough Records throughout the years. You are too many to list without risk of forgetting someone important. You know who you are, thank you, Enough Records would not be what it is without you.</p>

	<p>Current website developed by <a href="http://twitter.com/danpeddle" target="_blank">Dan Peddle</a> and ps as an <a href="https://github.com/enoughrec/arecordlabel/">open source project</a>, feel free to fork, reuse and contribute.</p>
	
</div>


		);
	}
});


module.exports = About;
