const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.get("/", articlesController.findAll);

router.post("/", articlesController.saveArticle);

router.delete("/:articleId", articlesController.deleteArticle);

module.exports = router;