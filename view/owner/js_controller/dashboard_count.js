'use strict';
myFirebase.controller('Count', function Count($scope,$firebaseArray,$location){
	var ref = firebase.database().ref().child("datadevcash/owner");
	var refs = $firebaseArray(ref);

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	// Get the total Revenue
	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap){
			snap.forEach(function(childSnap){
				angular.forEach(childSnap.val().business.customer_transcation, function(data){
					console.log(data);
				})
			})
		})
})