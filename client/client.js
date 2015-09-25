var friends_app = angular.module('friends_app', []);
friends_app.factory("friendFactory", function($http){
	var factory = {};
	var friends = [];
	factory.getFriends = function(callback) {
		$http.get('/friends').then(function(response){
			callback(response.data);
		})
	}
	factory.addFriend = function(info){
		friends.push({name: info.name, age: info.age});
		console.log("Factory Add: ", info);
		$http.post('/add', info).then(function(response){
			console.log("Factory Response: ",response);
		})
	}
	factory.removeFriend = function(friend){
		$http.post('/destroy', friend).then(function(response){
			console.log("Destroy Response: ", response);
		})
	}

	return factory;
});
// Now lets create a controller with some hardcoded data!
friends_app.controller('FriendsController', function($scope, friendFactory) {
  friendFactory.getFriends(function(data){
  	$scope.friends = data;
  	console.log("data: ",data);
  })
  $scope.addfriend = function(){
  	friendFactory.addFriend($scope.new_friend)
  	$scope.friends.push($scope.new_friend)
  }
  $scope.removeFriend = function(friend){
  	friendFactory.removeFriend(friend);
  	$scope.friends.splice($scope.friends.indexOf(friend), 1);
  }
})