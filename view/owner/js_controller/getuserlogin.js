'use strict'; 

myFirebase.controller('GetUserLogin', function GetUserLogin($scope, $location, $firebaseArray, $firebaseObject){
	
	var ref = firebase.database().ref().child("datadevcash/owner");
	var owner = JSON.parse(window.localStorage.getItem('user'));
	var accounts = JSON.parse(window.localStorage.getItem('accountItem'));
	var owner_key = JSON.parse(window.localStorage.getItem('owner_key'));
	var account_key = JSON.parse(window.localStorage.getItem('accountKey'));

	console.log(owner_key);

	var username = owner.owner_username;

	$scope.owner_name = owner.owner_fname + " " + owner.owner_lname;

	$scope.owner_fname = owner.owner_fname;
	$scope.owner_lname = owner.owner_lname;
	$scope.owner_mobileno = owner.owner_mobileno;
	$scope.owner_gender = owner.owner_gender;
	$scope.owner_bdate = owner.owner_bdate;
	$scope.ownerid = owner_key;

	$scope.ent_name = owner.enterprise.ent_name;
	$scope.ent_type = owner.enterprise.ent_type;
	$scope.ent_cat = owner.enterprise.ent_cat;
	$scope.no_emp = owner.enterprise.ent_no_emp;
	$scope.ent_add = owner.enterprise.ent_addr;
	$scope.ent_contact = owner.enterprise.ent_telno;
	$scope.ent_email = owner.enterprise.ent_email;
	$scope.ent_permit = owner.enterprise.ent_permitno;

	// console.log(owner);
	// console.log(accounts);

	// angular.forEach(accounts, function(val, key) {
	// 	console.log(val.acct_uname);

	// 	if(val.acct_uname === owner.owner_username) {
	// 		$scope.account_email = val.acct_email;
	// 		$scope.account_username = val.acct_uname;
	// 		$scope.account_password = val.acct_passw;
	// 	}

	// })
	$scope.accountid = account_key;
	$scope.account_email = accounts.acct_email;
	$scope.account_username = accounts.acct_uname;
	$scope.account_password = accounts.acct_passw;

	// $scope.deactive = function() {
	// 	var deactive = "Deactive";

	// 	var deactiveItem = {
	// 		acct_status:
	// 	}
	// }
});