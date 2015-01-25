/**
 * @jsx React.DOM
 */

var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var ArticleList = React.createClass({
    renderTitles:function(){
        var articles = this.props.articles;
        var comps = articles.map(function(article){
            var json = article.toJSON();
            return (
                <div className="list-article">
                    <Link to={'/blog/' + json.slug}><img src={json.image} /></Link>
                    <div className="right-content">
                        <Link to={'/blog/' + json.slug}><h1 className="title">{json.title}</h1></Link>
                        <div className="date">{article.get('date').format('YYYY-MM-DD')}</div>
                        <div className="reading-time">{json.readingTime.text}</div>
                        <div className="description">{json.description}</div>
                    </div>
                </div>
            )
        });
        return comps;
    },
    render: function() {
        var list = this.renderTitles();
        return (
            <div>
                <h1>Blog</h1>
                {list}
            </div>
        );
    }

});

module.exports = ArticleList;
