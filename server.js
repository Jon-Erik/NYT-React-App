const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/nytimessearch");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to mongo db")
});

app.listen(PORT, function() {
	console.log(("API Server now listening on PORT " + PORT))
});