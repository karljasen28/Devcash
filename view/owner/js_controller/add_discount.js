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
		var disc_start = $scope.disc_started;
		var disc_end = $scope.disc_end;
		var disc_status = "Active";

		var discountItem = {
			disc_code: disc_code,
			disc_type: disc_type,
			disc_value: disc_value,
			disc_start: disc_start.toLocaleDateString(),
			disc_end: disc_end.toLocaleDateString(),
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

			$scope.db.$add(discountItem);
			alert('Success');
			window.location = "/2/view/owner/landing_discount.php";
	}
});