'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.category = $firebaseArray(ref);

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.categories = [];

	
	// ref.orderByChild("business/owner_username")
	// 	.equalTo(username)
	// 	.on('value', function(snap) {
	// 		console.log(snap.val());
	// 		snap.forEach(function(childSnap) {
	// 			console.log(childSnap.val());

	// 			angular.forEach(childSnap.val().business.category, function(data) {
	// 				console.log(data);
	// 				$scope.categories.push(data);
	// 			});
	// 		});
	// 	});

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap) {
			// console.log(snap.val());

			snap.forEach(function(childSnap) {
				childSnap.forEach(function(innerChild) {

					angular.forEach(innerChild.val().category, function(child, key) {
						// console.log(child["id"] =);
						// console.log(key);
						child["id"] = key
						$scope.categories.push(child);
					});
				});
			});
	});

		$scope.removeCategory = function(cat) {
			console.log(cat.category_name);
			ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snapshot) {

				snapshot.forEach(function(childSnap) {
					console.log(childSnap.key);
					ref.child(childSnap.key)
						.child("business")
						.child("category")
						.orderByChild("category_name")
						.equalTo(cat.category_name)
						.on('value', function(innerSnapshot) {
							innerSnapshot.forEach(function(itemSnapshot) {
								console.log(itemSnapshot.exists());
								itemSnapshot.ref.remove();
								alert("Category Removed");
								location.reload();
							});
						});
				})
			})
		}
});