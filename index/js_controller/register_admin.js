'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject){

	var ref = firebase.database().ref().child("datadevcash/admin");
	$scope.admin = $firebaseArray(ref);

	$scope.register = function()
	{
	// OWNER INFORMATION REGISTRATION
		var fname = $scope.owner_fname;
		var lname = $scope.owner_lname;
		var username = $scope.owner_username;
		var email = $scope.owner_email
		var password = $scope.owner_password;
		var type = "Admin";
		var status = "Active";
		var category = "";

		var adminItem = {
			admin_fname: fname,
			admin_lname: lname,
			admin_uname: username,
			admin_email: email,
			admin_password: password,
			acct_type: type,
			status: status
		}		

		$scope.admin.$add(adminItem);
		alert('Admin Registered');
						
	}//end of function login
	
});