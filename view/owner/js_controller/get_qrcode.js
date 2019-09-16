'use strict';

myFirebase.controller('GetQrCode', function GetQrCode($scope, $location, $firebaseArray, $firebaseObject,) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.qrcode = $firebaseArray(ref);

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.qrcodes = [];

	// ref.orderByChild("business/owner_username")
	// 	.startAt(username)
	// 	.endAt(username)
	// 	.on('value', function(snap) {
	// 		console.log(snap.val());

	// 		snap.forEach(function(childSnap) {
	// 			console.log(childSnap.val());

	// 			angular.forEach(childSnap.val().business.services, function(data) {
	// 				console.log(data);
	// 				$scope.service.push(data);
	// 			});
	// 		});
	// 	});


ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap) {
			// console.log(snap.val());

			snap.forEach(function(childSnap) {
				childSnap.forEach(function(innerChild) {

					angular.forEach(innerChild.val().qrcode, function(child, key) {
						// console.log(child["id"] =);
						// console.log(key);
						child["id"] = key
						$scope.qrcodes.push(child);
						console.log($scope.qrcodes);
					});
				});
			});
	});

		


		$scope.removeQr = function(qr) {
			ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snapshot) {

				snapshot.forEach(function(childSnap) {
					console.log(childSnap.key);
					ref.child(childSnap.key)
						.child("business")
						.child("qrcode")
						.orderByChild("qr_code")
						.equalTo(qr.qr_code)
						.on('value', function(innerSnapshot) {
							innerSnapshot.forEach(function(itemSnapshot) {
								console.log(itemSnapshot.exists());
								itemSnapshot.ref.remove();
								alert("Service Removed");
								location.reload();
							});
						});
				})
			})
		}
});