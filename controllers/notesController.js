const db = require("../models");

module.exports = {
	saveNote: function(req, res) {
		let newNote = req.body.note;
		let articleId = req.body.articleId;

		db.Note.create({body: newNote})
		.then(function(dbNote) {
			return db.Article.findOneAndUpdate({_id: articleId}, {$push: {notes: dbNote._id}}, {new: true});
		}).then(function(dbArticle) {
			res.json(dbArticle);
		}).catch(function(err) {
			res.json(err);
		})
	},

	deleteNote: function(req, res) {
		let noteId = req.params.noteId;
		let articleId = req.params.articleId;

		db.Note.remove({_id: noteId})
		.then(function(response) {
			console.log('note deleted')
			db.Article.update({_id: articleId}, {$pull: {notes: noteId}})
			.then(function(response) {
				console.log("note id deleted from article notes")
				res.send("Note deleted with reference in article")
			})
		}).catch(function(err) {
			res.send(err);
		});
	}
}