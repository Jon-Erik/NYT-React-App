const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// router.route("/api/articles").get(articlesController.findAll);

// router.route("/api/articles").post(articlesController.saveArticle);

// router.route("/api/articles").delete(articlesController.deleteArticle);

router.route("/").post(articlesController.saveArticle)

module.exports = router;