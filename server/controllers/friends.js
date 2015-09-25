var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = (function() {
  return {
    show: function(req, res) {
      Friend.find({}, function(err, results){
      	if(err){
      		console.log(err);
      	}
      	else
      	{
      		res.json(results);
      	}
      });
    },
    add: function(req,res){
      console.log("success in friends controller")
      console.log("Controller: ", req.body.name, req.body.age)
      var friend = new Friend({name: req.body.name, age: req.body.age})
      friend.save(function(err){
        if(err){
          console.log("something went wrong");
        }
        else{
          console.log('successfully added a user!');
        }
      })
    },
    destroy: function(req,res){
      Friend.remove({_id: req.body._id}, function(err, results){
        if(err){
          console.log("something went wrong");
        }
        else
        {
          console.log("success");          
        }
      });
    }
  }
})();