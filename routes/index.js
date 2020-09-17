var router = require("koa-router")();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/vue-chat-room");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("we're connected");
	var kittySchema = mongoose.Schema({
		name: String,
  });
  kittySchema.methods.speak = function () {
		var greeting = this.name
			? "Meow name is " + this.name
			: "I don't have a name";
		console.log(greeting);
	};
	var Kitten = mongoose.model("Kitten", kittySchema);
  var fluffy = new Kitten({ name: "fluffy" });
  // 调用save保存到数据库内
	fluffy.save(function (err, fluffy) {
		if (err) return console.error(err);
		fluffy.speak();
  });
  // 查找kitten集合内的数据
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })
});
router.get("/", function* (next) {
	yield this.render("index", {
		title: "Hello World Koa!",
	});
});

router.get("/foo", function* (next) {
	yield this.render("index", {
		title: "Hello World foo!",
	});
});

module.exports = router;
