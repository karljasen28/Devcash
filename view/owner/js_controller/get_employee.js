'use strict';

myFirebase.controller('GetEmployee', function GetEmployee($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	var rootRef = firebase.database().ref();
	var db = firebase.database();

	$scope.employee = $firebaseArray(ref);
	
	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	var urlParams = new URLSearchParams(window.location.search);


	$scope.employees = [];
	// $scope.employeeUpdate = {};
	// $scope.emp_fname = '';
	// $scope.emp_lname = '';
	// $scope.emp_bdate = '';
	// $scope.emp_email = '';
	// $scope.emp_mobileno = '';
	// $scope.emp_address = '';
	// $scope.emp_task = '';
	// $scope.emp_status = '';

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snap) {
			// console.log(snap.val());

			snap.forEach(function(childSnap) {
				childSnap.forEach(function(innerChild) {

					angular.forEach(innerChild.val().employee, function(child, key) {
						// console.log(child["id"] =);
						// console.log(key);
						child["id"] = key
						$scope.employees.push(child);
						// $scope.emp_fname = child.emp_fname;
						// $scope.emp_lname = child.emp_lname;
						// $scope.emp_email = child.emp_email;
						// $scope.emp_mobileno = child.emp_mobileno;
						// $scope.emp_address = child.emp_addr;
						// $scope.emp_bdate = child.emp_bdate;
						// $scope.emp_task = child.emp_task;
						// $scope.emp_status = child.emp_status;
					});
				});
			});
	});

	$scope.removeEmployee = function(data) {
		console.log(data.account.acct_uname);

		ref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snapshot) {

				snapshot.forEach(function(childSnap) {

					ref.child(childSnap.key)
						.child("business")
						.child("employee")
						.orderByChild("account/acct_uname")
						.equalTo(data.account.acct_uname)
						.on('value', function(innerSnapshot) {
							
							innerSnapshot.forEach(function(itemSnapshot) {
								itemSnapshot.ref.remove();
								alert("Employee Removed");
								location.reload();
							});
						});
				})
			})
	}


	// $scope.editEmployee = function() {
	// 	var email = $scope.edit_email;
	// 	var mobileno = $scope.edit_mobileno;
	// 	var address = $scope.edit_address;
	// 	var status = $scope.edit_status;
	// 	var task = $scope.edit_task;

	// 	var id = urlParams.get('id');

	// 	if (email === undefined) {
	// 		email = $scope.emp_email;
	// 	}

	// 	if (mobileno === undefined) {
	// 		mobileno = $scope.emp_mobileno;
	// 	}

	// 	if (address === undefined) {
	// 		address = $scope.emp_address;
	// 	}

	// 	if (status === undefined) {
	// 		status = $scope.emp_status;
	// 	}

	// 	if (task === undefined) {
	// 		task = $scope.emp_task;
	// 	}

	// 	var editEmployeeItem = {
	// 		emp_email: email,
	// 		emp_mobileno: mobileno,
	// 		emp_addr: address,
	// 		emp_task: task,
	// 		emp_status: status
	// 	}

	// 	console.log(editEmployeeItem);
	// 	console.log(id);

	// 	ref.orderByChild("business/owner_username")
	// 		.equalTo(username)
	// 		.on('value', function(snapshot) {

	// 			snapshot.forEach(function(childSnap) {
	// 				// .orderByChild("account/acct_uname")
	// 					// .equalTo(data.account.acct_uname)

	// 				ref.child(childSnap.key)
	// 					.child("business")
	// 					.child("employee/"+id)
	// 					.on('value', function(innerSnapshot) {
	// 						innerSnapshot.ref.update(editEmployeeItem);
	// 						alert("Update Success");
	// 						window.location = "/2/view/owner/landing_employee.php";
	// 					});
	// 			})
	// 		})
	// }
});