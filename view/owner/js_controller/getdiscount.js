'user strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.discount = $firebaseArray(ref);

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.discounts = [];

	
	// ref.orderByChild("business/owner_username")
	// 	.equalTo(username)
	// 	.on('value', function(snap) {
	// 		console.log(snap.val());
	// 		snap.forEach(function(childSnap) {
	// 			console.log(childSnap.val());

	// 			angular.forEach(childSnap.val().business.discount, function(data) {
	// 				console.log(data);
	// 				$scope.discounts.push(data);
	// 			});
	// 		});
	// 	});

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap) {
			// console.log(snap.val());

			snap.forEach(function(childSnap) {
				childSnap.forEach(function(innerChild) {

					angular.forEach(innerChild.val().discount, function(child, key) {
						// console.log(child["id"] =);
						// console.log(key);
						child["id"] = key
						$scope.discounts.push(child);
					});
				});
			});
	});

		$scope.removeDiscount = function(disc){
			console.log(disc.disc_code);
			ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snapshot) {

				snapshot.forEach(function(childSnap) {
					console.log(childSnap.key);
					ref.child(childSnap.key)
						.child("business")
						.child("discount")
						.orderByChild("disc_code")
						.equalTo(disc.disc_code)
						.on('value', function(innerSnapshot) {
							innerSnapshot.forEach(function(itemSnapshot) {
								console.log(itemSnapshot.exists());
								itemSnapshot.ref.remove();
								alert("Product Removed");
								location.reload();
							});
						});
				})
			})
		}
});