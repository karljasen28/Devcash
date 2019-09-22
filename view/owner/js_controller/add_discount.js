'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.discount = $firebaseArray(ref);
	$scope.db = null;

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.addDiscount = function()
	{
		var disc_code = $scope.disc_code;
		var disc_type = $scope.disc_result;
		var disc_value = $scope.disc_val;
		// var disc_start = $scope.disc_started;
		// var disc_end = $scope.disc_end;
		var disc_status = "Active";

		if($scope.disc_started == null || $scope.disc_end == null) {
			var disc_start = "No Expiration";
			var disc_end = "No Expiration";
		}
		else {
			var disc_start = $scope.disc_started.toLocaleDateString();
			var disc_end = $scope.disc_end.toLocaleDateString();
		}


		var discountItem = {
			disc_code: disc_code,
			disc_type: disc_type,
			disc_value: disc_value,
			disc_start: disc_start,
			disc_end: disc_end,
			disc_status: disc_status
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

			var discountRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/discount");
			$scope.db = $firebaseArray(discountRef);

		$scope.data = [];
		ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snap){
				snap.forEach(function(childSnap){
					angular.forEach(childSnap.val().business.discount, function(data){
						$scope.data.push(data.disc_code);
						console.log($scope.data);
					})
				})
			})

		if(disc_code == null || disc_type == null || disc_value == null){
				alert("Invalid category Name");
				return
			}
		if ($scope.data.length > 0) {
			// we got items inside array
			console.log($scope.data);

			for(var i = 0; i < $scope.data.length; i++) {
				if ($scope.data[i] === disc_code) {
					alert(disc_code+" is already exist");
					return;
				}	
			}
			$scope.db.$add(discountItem);
			alert("Discount "+disc_code+" Added");
			window.location = "/2/view/owner/landing_discount.php";
		}
		else {
			$scope.db.$add(discountItem);
			alert("Discount "+disc_code+" Added");
			window.location = "/2/view/owner/landing_discount.php";
		}



			// $scope.db.$add(discountItem);
			// alert('Success');
			// window.location = "/2/view/owner/landing_discount.php";
	}
});