'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.category = $firebaseArray(ref);
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
				});
			});

			var categoryRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/category");
			$scope.db = $firebaseArray(categoryRef);

		$scope.data = [];
		ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snap){
				snap.forEach(function(childSnap){
					angular.forEach(childSnap.val().business.category, function(data){
						$scope.data.push(data.category_name);
						console.log($scope.data);
					})
				})
			})

		if(cat_name == null){
				alert("Invalid category Name");
				return
			}
		if ($scope.data.length > 0) {
			// we got items inside array
			console.log($scope.data);

			for(var i = 0; i < $scope.data.length; i++) {
				if ($scope.data[i] === cat_name) {
					alert(cat_name+" is already exist");
					return;
				}	
			}
			$scope.db.$add(categoryItem);
			alert("Category "+cat_name+" Item Added");
			window.location = "/2/view/owner/landing_category.php";
		}
		else {
			$scope.db.$add(categoryItem);
			alert("Category "+cat_name+" Item Added");
			window.location = "/2/view/owner/landing_category.php";
		}
	}
});