var Backbone = require('backbone');
var _ = require('lodash');
var slugify = require('slugify');
var moment = require('moment');

var data = require('../../data/articles');

var Article = Backbone.Model.extend({
    
    parse: function(data){

        var data = {
            title: data.attributes.title,
            date: moment(data.attributes.date),
            body: data.body,
            slug: slugify(data.attributes.title),
            tags: data.tags
        }
        
        return data;
    }
});

var Articles = Backbone.Collection.extend({
    comparator: function(model1, model2) {
        return model1.get('date') > model2.get('date') ? -1 : 1;
    },
    model: Article,
    getBySlug: function(slug){
        return this.findWhere({
            slug: slug
        });
    }
});

var articles = new Articles(data, {parse: true});

// expose to window for playing
// @todo remove me when done!
window.articles = articles;

module.exports = articles;
