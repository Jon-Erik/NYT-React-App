var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	headline: {
		type: String,
		required: true
	},

	snippet: {
		type: String,
		required: true
	},

	URL: {
		type: String,
		required: true
	},

	pubDate: {
		type: String,
		required: true
	},

	notes: [
		{
			type: Schema.Types.ObjectId,
			ref: "Note"
		}
	]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;