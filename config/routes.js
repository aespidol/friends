var friends = require('../server/controllers/friends.js');
module.exports = function(app){
	app.get('/friends', function(req,res){
		console.log("Route: ",req.body);
		friends.show(req,res);
	})
	app.post('/add', function(req, res){
		console.log("Route Request: ", req.body);
		friends.add(req,res);
	})
	app.post('/destroy', function(req, res){
		console.log("Routes: ",req.body);
		friends.destroy(req,res);
	})
}