'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject){
	var ref = firebase.database().ref().child("datadevcash/owner/business");
	var ownerRef = firebase.database().ref().child("datadevcash/owner");

	$scope.login = function() {
		var username = $scope.owner_username;
		var password = $scope.owner_password;

		ownerRef.orderByChild('business/owner_username')
			.startAt(username)
			.endAt(username)
			.once('value', function(snap){
				console.log(snap.val());
				if(snap.val() !== null) {
					snap.forEach(function(childSnapshot) {
						window.localStorage.setItem("owner_key", JSON.stringify(childSnapshot.key));

						angular.forEach(childSnapshot.val().business.account, function(data, key) {
							console.log(key);
							if(data.acct_type === "Owner"){
								console.log(key);
							}
							if(data.acct_type === "Owner") {
								if (data.acct_uname === username && data.acct_passw === password && data.acct_status === "Active") {
									window.localStorage.setItem("user", JSON.stringify(childSnapshot.val().business));
									// window.localStorage.setItem("account", JSON.stringify(childSnapshot.val().business.account));
									window.localStorage.setItem("accountKey", JSON.stringify(key));
									window.localStorage.setItem("accountItem", JSON.stringify(data));
									window.localStorage.setItem("isLoggedIn", true);
									window.location = "/2/view/owner/landing_dashboard.php";

								}
								else {
									// $scope.message= true;
									window.alert("Incorrect Username or Password");
								}
							}
						});
					});
				} else {
					window.alert("Invalid Account");
					// $scope.message=true;
				}
			});	
	}
});