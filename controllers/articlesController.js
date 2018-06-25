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
		var articleId = req.params.articleId;

		db.Article.find({_id: articleId})
		.then(function(result) {
			var noteIds = [];
			for (i = 0; i < result[0].notes.length; i++) {
				noteIds.push(result[0].notes[i]);
			}

			db.Note.remove({_id: {$in: noteIds}})
			.then(function(result) {

				db.Article.remove({_id: articleId})
				.then(function(result) {
					console.log("article deleted with its notes");
					res.send("article deleted with its notes");
				}).catch(function(err) {
					console.log(err);
					res.send(err);
				});
			}).catch(function(err) {
				console.log(err);
				res.send(err);
			});
		}).catch(function(err) {
			console.log(err);
			res.send(err);
		});
	},	
};