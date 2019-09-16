'user strict';

myFirebase.controller('FormController', function FormController($scope,$firebaseArray) {
	var ref = firebase.database().ref().child("datadevcash/admin");
	$scope.admin = $firebaseArray(ref);

	$scope.register = function(){
		var fname = $scope.fname;
		var lname = $scope.lname;
		var username = $scope.username;
		var email = $scope.email;
		var pass = $scope.password;

		var adminItem = {
			account:{
			admin_fname: fname,
			admin_lname: lname,
			admin_username: username,
			admin_email: email,
			admin_password: pass,
			account_type: "Admin"
			}
		}

		$scope.admin.$add(adminItem);
		alert("Admin Successfully Created");
		window.location = "/2/index/admin/index_admin.php";
	}
});