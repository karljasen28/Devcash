'use strict'; 

myFirebase.controller('GetUserLogin', function GetUserLogin($scope, $location, $firebaseArray, $firebaseObject){
	
	var ref = firebase.database().ref().child("datadevcash/owner");
	var counts = $firebaseArray(ref);

	var owner = JSON.parse(window.localStorage.getItem('user'));
	var accounts = JSON.parse(window.localStorage.getItem('accountItem'));
	var owner_key = JSON.parse(window.localStorage.getItem('owner_key'));
	var account_key = JSON.parse(window.localStorage.getItem('accountKey'));

	console.log(owner_key);

	var username = owner.owner_username;

	$scope.profile = owner.owner_image;
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
	$scope.ent_tin = owner.enterprise.ent_tin;

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

	// Get the total Revenue
	$scope.revenue = [];
	$scope.total = 0;

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap){
			snap.forEach(function(childSnap){

				// childSnap.forEach(function(innerSnapshot) {
				// 	console.log(innerSnapshot.val());
				// });

				angular.forEach(childSnap.val().business.customer_transaction, function(data){
					$scope.total += data.amount_due;					
				});
			})
		})

		$scope.emps = [];
		$scope.employeeCount = 0;
		ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snap){
				snap.forEach(function(childSnap){
					angular.forEach(childSnap.val().business.employee, function(data){
						$scope.emps.push(data);
						$scope.employeeCount = $scope.emps.length;
						console.log($scope.employeeCount);
					})
				})
			})

		$scope.prods = [];
		$scope.prodsCount = 0;
		ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snap){
				snap.forEach(function(childSnap){
					angular.forEach(childSnap.val().business.product, function(data){
						$scope.prods.push(data);
						$scope.prodsCount = $scope.prods.length;
						console.log($scope.prodsCount);
					})
				})
			})

		$scope.servs = [];
		$scope.servsCount = 0;
		ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snap){
				snap.forEach(function(childSnap){
					angular.forEach(childSnap.val().business.services, function(data){
						$scope.servs.push(data);
						$scope.servsCount = $scope.servs.length;
						console.log($scope.servsCount);
					})
				})
			})
});