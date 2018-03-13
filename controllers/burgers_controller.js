var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models/burgertable.js");

// Update for var burgerAction
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log(db);
  db.Burgertable.findAll({}).then(function(results){

    res.render("index", json(results));
  });
});

// router.post("/api/burgers", function(req, res) {
//   burgerAction.insertOne([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, false
//   ], function(result) {
//     // Send back the ID of the burger
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burgerAction.updateOne({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


// Export routes for server.js to use.
module.exports = router;
