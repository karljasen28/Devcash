'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject){
	var ref = firebase.database().ref().child("datadevcash/owner");
	// var dbRef = firebase.database().ref().child("datadevcash");
	$scope.accountID = firebase.database().ref().push().getKey();

	$scope.employee = $firebaseArray(ref);
	// $scope.db = $firebaseArray(dbRef);
	$scope.db = null;
	$scope.data = [];

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	$scope.ownerKey = '';

	$scope.addEmployee = function()
	{
		var fname = $scope.emp_fname;
		var lname = $scope.emp_lname;
		var email = $scope.emp_email;
		var gender = $scope.emp_gender;
		var bdate = $scope.emp_bdate;
		var mobileno = $scope.emp_mobileno;
		var address = $scope.emp_address;
		var task = $scope.emp_task;
		var status = "Active";

		var res = fname.charAt(0).toLowerCase();
		var ras = lname.toLowerCase();
		var emp_acct_uname = res + ras + Math.floor(Math.random() * 1000);
		var emp_acct_passw = emp_acct_uname;
		var emp_acct = emp_acct_passw;
		var emp_acct_email = "";
		var accountID = ""+$scope.accountID;

		var empAccount = {
			acct_passw: emp_acct_passw,
			acct_status: status,
			acct_type: "Employee",
			acct_uname: emp_acct_uname,
			acct_email: emp_acct_email
		}

		var accountItem = {
			acct_passw: emp_acct_passw,
			acct_status: status,
			acct_type: "Employee",
			acct_uname: emp_acct_uname,
			acct_email: emp_acct_email
		}

		var employeeItem = {
			account: empAccount,
			emp_fname : fname,
			emp_lname : lname,
			emp_gender: gender,
			emp_mobileno : mobileno,
			emp_task: task,
			emp_workfor: username
		}
		
		ref.orderByChild("business/owner_username")
			.startAt(username)
			.endAt(username)
			.on('value', function(snap){
				snap.forEach(function(childSnapshot) {
					$scope.ownerKey = childSnapshot.key;
					console.log(childSnapshot.key);
					angular.forEach(childSnapshot.val().business.employee, function(data) {
						console.log(data);
						$scope.data = data.emp_fname + data.emp_lname;
						console.log($scope.data);
					});
				});
			});
		// we insert to owner record
	var employeeRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/employee");
	$scope.db = $firebaseArray(employeeRef);

	var accountRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/account");
	$scope.dbAccount = $firebaseArray(accountRef);

	var name = fname + lname;

	if(fname == null || lname == null || gender == null || task == null) {
		alert("All fields must be provided");
	}
	else{	
		if($scope.data === name) {
			alert("Employee already exist");
		}
		else {
			$scope.db.$add(employeeItem);
			$scope.dbAccount.$add(accountItem);
			alert('Success');
			window.location = "/2/view/owner/landing_employee.php";			
		}
	}
		// $scope.employee.$add(employeeItem);
		// alert('success');
	}
});