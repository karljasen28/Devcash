'use strict';

myFirebase.controller('FormController', function FormController($scope,$firebaseArray,$location) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	var report = $firebaseArray(ref);

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.reports = [];
	$scope.itemsByPage=3;
	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap){
			console.log(snap.val());

			snap.forEach(function(childSnap){
				console.log(childSnap.val());

				childSnap.forEach(function(innerChildSnap){
					console.log(innerChildSnap.val());

					angular.forEach(innerChildSnap.val().customer_transaction, function(data){
						$scope.reports.push(data);
					})
				})
			})
		})
})