'use strict';

myFirebase.controller('RegisterForm', function RegisterForm($scope, $location, $firebaseArray, $firebaseObject){

	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.accountID = firebase.database().ref().push().getKey();

	$scope.owner = $firebaseArray(ref);
	$scope.data_uname = [];

	$scope.register = function()
	{
	// OWNER INFORMATION REGISTRATION
		var fname = $scope.owner_fname;
		var lname = $scope.owner_lname;
		var gender = $scope.owner_gender;
		var username = $scope.owner_username;
		var mobileno = $scope.owner_mobileno;
		var email = $scope.owner_email
		var password = $scope.owner_password;
		var type = "Owner";
		var status = "Active";
		var category = "";
		var accountID = ""+$scope.accountID;

	// 	ENTERPRISE INFORMATION REGISTRATION
		var enterprise_name = $scope.enterprise_name;
		var enterprise_type = $scope.enterprise_type;
		var no_employee = $scope.no_employee;
		var enterprise_address = $scope.enterprise_address;
		var enterprise_permit = $scope.enterprise_permit;

		var accountItem = {
			acct_passw: password,
			acct_status: status,
			acct_type: type,
			acct_uname: username,
			acct_email: email
		}

		if(no_employee > 1 && no_employee <= 9)
		{
			category = "Micro";
		}else if(no_employee >= 10 && no_employee <= 99)
		{
			category = "Small";
		}else
		{
			category = "Medium";
		}

		var enterpriseItem = {
			ent_name: enterprise_name,
			ent_type: enterprise_type,
			ent_addr: enterprise_address,
			ent_no_emp:  no_employee,
			ent_telno: '',
			ent_permitno: enterprise_permit,
			ent_cat: category,
			ent_email: ''
		}

		console.log(accountID);
		var ownerItem = {
			business : {
				account: {
					[accountID]: accountItem
				},
				enterprise: enterpriseItem,
				owner_fname: fname,	
				owner_lname: lname,
				owner_mobileno: mobileno,
				owner_username: username,
				owner_gender: gender,
			}
		}
		// $scope.owner.$add(ownerItem);
		// alert("Register Success");
		// window.location = "/2/index/login.php";

		ref.orderByChild("business/owner_username")
			.startAt(username)
			.endAt(username)
			.on('value', function(data) {
				console.log(data.val());
					data.forEach(function(snap) {
						$scope.data_uname = snap.val().business.owner_username;
					});
			});

			console.log($scope.data_uname);

			if(fname == null || lname == null || gender == null || username == null || mobileno == null || email == null || password == null ||
			enterprise_name == null || enterprise_type == null || no_employee == null || enterprise_address == null || enterprise_permit == null) {
				alert("All fields must be provided");
			}
			else {
			if($scope.data_uname === username) {
				alert("Username Already Exist");
			} else {
				$scope.owner.$add(ownerItem);
				alert("Register Success");
				window.location = "/2/index/login.php";
			}
		}
	}//end of function
	
});
