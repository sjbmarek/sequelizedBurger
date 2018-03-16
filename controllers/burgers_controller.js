var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Update for var burgerAction
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // console.log(db);
  db.Burgertable.findAll({}).then(function(results){
  	var hbsObject = {
  		burgers: results
  	};
  	console.log("XXXXXXXXXXXX");
  	console.log(hbsObject);
  	res.render("index", hbsObject);
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

  router.post("/api/burgers", function(req, res) {
    console.log("New burger:-----------------------");
    console.log(req.body);
    db.Burgertable.create({
      burger_name: req.body.burger_name,
      devoured: false,
    }).then (function(result) {
    	console.log("RRRRRRRRRRRRRRRR");
    	console.log(result);
      // We have access to the new todo as an argument inside of the callback function
      res.json({ id: result.insertId });
    });
   
  });

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


 router.put("/api/burgers/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    // var condition = "id = " + req.params.id;
    db.Burgertable.update({
      devoured: req.body.devoured,
    }, {
      where: {
        id: req.params.id},
      }).then (function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
  });




// Export routes for server.js to use.
module.exports = router;
