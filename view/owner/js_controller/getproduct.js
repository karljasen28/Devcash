'use strict';

myFirebase.controller('GetProduct', function GetProduct($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.product = $firebaseArray(ref);

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.products = [];

	// ref.orderByChild("business/owner_username")
	// 	.startAt(username)
	// 	.endAt(username)
	// 	.on('value', function(snap) {
	// 		console.log(snap.val());

	// 		snap.forEach(function(childSnap) {
	// 			console.log(childSnap.val());

	// 			angular.forEach(childSnap.val().business.product, function(data) {
	// 				// console.log(data);
	// 				$scope.products.push(data);
	// 				console.log(data);
	// 			});
	// 		});
	// 	});

ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap) {
			// console.log(snap.val());

			snap.forEach(function(childSnap) {
				childSnap.forEach(function(innerChild) {

					angular.forEach(innerChild.val().product, function(child, key) {
						// console.log(child["id"] =);
						// console.log(key);
						child["id"] = key
						$scope.products.push(child);
					});
				});
			});
	});

		$scope.removeProduct = function(prod) {

			console.log(prod.prod_name);
			ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snapshot) {

				snapshot.forEach(function(childSnap) {
					console.log(childSnap.key);
					ref.child(childSnap.key)
						.child("business")
						.child("product")
						.orderByChild("prod_name")
						.equalTo(prod.prod_name)
						.on('value', function(innerSnapshot) {
							innerSnapshot.forEach(function(itemSnapshot) {
								console.log(itemSnapshot.exists());
								itemSnapshot.ref.remove();
								alert("Discount Removed");
								location.reload();
							});
						});
				})
			})
		}

});