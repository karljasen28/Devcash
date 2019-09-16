'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject){
	var ref = firebase.database().ref().child("datadevcash/owner/business");
	var adminRef = firebase.database().ref().child("datadevcash/admin");

	$scope.login = function() {
		var username = $scope.owner_username;
		var password = $scope.owner_password;

		adminRef.orderByChild('admin_uname')
			.startAt(username)
			.endAt(username)
			.once('value', function(snap) {
				console.log(snap.val());
				if(snap.val() !== null){
					angular.forEach(snap.val(), function(data){
						console.log(data);
						if(data.acct_type === "Admin")
						{
							if(data.admin_uname === username && data.admin_password === password)
							{
								window.localStorage.setItem("admin", JSON.stringify(data));
								window.localStorage.setItem("isLoggedIn", true);
								window.location = "/2/view/admin/admin_dashboard.php";
							} else {
								alert('Incorrect Admin');
							}
						}
					});
				} else {
					alert('Invalid Admin Account');
				}
			});
	}
});