'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject){
	var ref = firebase.database().ref().child("datadevcash/owner");
	// var dbRef = firebase.database().ref().child("datadevcash");
	$scope.accountID = firebase.database().ref().push().getKey();
	var storageRef = firebase.storage();
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

		// var setProfile = pic.files[0];
		// if(setProfile == null){
		// 	alert("Image must be provided");
		// }
		// else{
		// var upload = storageRef.ref("Employee/" + ( + new Date() ) + setProfile.name);
		// }

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
			emp_phone : mobileno,
			emp_username: emp_acct_uname,
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
				});
			});
		// we insert to owner record
	var employeeRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/employee");
	$scope.db = $firebaseArray(employeeRef);

	var accountRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/account");
	$scope.dbAccount = $firebaseArray(accountRef);


	$scope.data = []
	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.once('value', function(snap){
			snap.forEach(function(childSnap){
				angular.forEach(childSnap.val().business.employee, function(data){
					$scope.data.push(data.emp_fname + data.emp_lname);
					console.log($scope.data);
				})
			})
		})	
	var name = fname + lname;	

	if(fname == null || lname == null || gender == null || task == null) {
		alert("All fields must be provided");
		return
	}
	if ($scope.data.length > 0) {
			// we got items inside array
			console.log($scope.data);

			for(var i = 0; i < $scope.data.length; i++) {
				if ($scope.data[i] === name) {
					alert(fname+" "+lname+" is already exist");
					return;
				}	
			}
			$scope.db.$add(employeeItem);
			$scope.dbAccount.$add(accountItem);
	        alert("Employee "+fname+" "+lname+" Registered");
	        window.location = "/2/view/owner/landing_employee.php";

			// upload.put(setProfile)
	  //       .then( setProfile => setProfile.ref.getDownloadURL() )
	  //       .then( url => {
	  //           employeeRef.push({
	  //           	emp_image: url,
	  //           	account: empAccount,
			// 		emp_fname : fname,
			// 		emp_lname : lname,
			// 		emp_gender: gender,
			// 		emp_phone : mobileno,
			// 		emp_username: emp_acct_uname,
			// 		emp_task: task,
			// 		emp_workfor: username
	  //           });
	  //           $scope.dbAccount.$add(accountItem);
	  //           alert("Employee Registered");
	  //           window.location = "/2/view/owner/landing_employee.php";
	  //       });
		}
		else {
			$scope.db.$add(employeeItem);
			$scope.dbAccount.$add(accountItem);
	        alert("Employee "+name+" Registered");
	        window.location = "/2/view/owner/landing_employee.php";
			// upload.put(setProfile)
	  //       .then( setProfile => setProfile.ref.getDownloadURL() )
	  //       .then( url => {
	  //           employeeRef.push({
	  //           	emp_image: url,
	  //           	account: empAccount,
			// 		emp_fname : fname,
			// 		emp_lname : lname,
			// 		emp_gender: gender,
			// 		emp_phone : mobileno,
			// 		emp_username: emp_acct_uname,
			// 		emp_task: task,
			// 		emp_workfor: username
	  //           });
	  //           $scope.dbAccount.$add(accountItem);
	  //           alert("Employee Registered");
	  //           window.location = "/2/view/owner/landing_employee.php";
	  //       });
		}



	// $scope.db.$add(employeeItem);
			// $scope.dbAccount.$add(accountItem);
			// alert('Success');
			// window.location = "/2/view/owner/landing_employee.php";	
		// $scope.employee.$add(employeeItem);
		// alert('success');
	}
});