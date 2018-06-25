import APIKey from "./API-key.js";
import axios from "axios";

export default {
	articleSearch: function(params) {
 		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + 
 			"&" + params + "&sort=newest&fl=web_url,snippet,lead_paragraph,headline,pub_date,_id&page=1")
	},

	saveArticle: function(articleData) {
		return axios.post("/api/articles", articleData);
	},

	deleteArticle: function(articleId) {
		return axios.delete("/api/articles/" + articleId);
	},

	getSavedArticles: function() {
		return axios.get("/api/articles");
	},

	saveNote: function(noteData) {
		return axios.post("/api/notes", noteData);
	},

	deleteNote: function(noteData) {
		return axios.delete("api/notes/" + noteData.noteId + "/" + noteData.articleId);
	}
};