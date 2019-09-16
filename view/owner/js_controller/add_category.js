'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.category = $firebaseArray(ref);
	$scope.data = [];
	$scope.db = null;

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.addCategory = function()
	{
		var cat_name = $scope.cat_name;

		var categoryItem = {
			category_name: cat_name
		}

		ref.orderByChild("business/owner_username")
			.startAt(username)
			.endAt(username)
			.on('value', function(snap){
				console.log(snap.val());
				snap.forEach(function(data) {
					console.log(data.key);
					$scope.ownerKey = data.key;
					angular.forEach(data.val().business.category, function(shot){
						console.log(data);
						$scope.data = shot.category_name;
					});
				});
			});

			var categoryRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/category");
			$scope.db = $firebaseArray(categoryRef);


			if(cat_name == null){
				alert("Invalid category Name");
			}
			else{
				if(cat_name === $scope.data) {
					alert("Category already exist");
				}
				else{
					$scope.db.$add(categoryItem);
					alert('Success');
					window.location = "/2/view/owner/landing_category.php";
				}
			}
	}
});