const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.Article.find({})
		.populate("notes")
		.then(function(dbArticles) {
			res.json(dbArticles)
		}).catch(function(err) {
			res.status(422).json(err);
		});
	},

	saveArticle: function(req, res) {
		console.log('save article')
		db.Article.create(req.body)
		.then(function(dbModel) {
			res.json(dbModel);
		}).catch(function(err) {
			res.status(422).json(err);
		});
	},

	deleteArticle: function(req, res) {
		db.Article.findById({ _id: req.params.id})
		.then(function(dbModel) {
			dbModel.remove();
		}).then(function(dbModel) {
			res.json(dbModel);
		}).catch(function(err) {
			res.status(422).json(err);
		});
	},	
};