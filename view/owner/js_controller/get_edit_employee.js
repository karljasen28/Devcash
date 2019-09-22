'use strict';

myFirebase.controller('EditEmployee', function EditEmployee($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;
	var ownerKey = JSON.parse(window.localStorage.getItem('ownerKey'));
	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get('id');

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snapshot) {

			snapshot.forEach(function(childSnap) {

				ref.child(childSnap.key)
					.child("business")
					.child("employee/"+id)
					.on('value', function(childSnapshot) {
						var employeeData = childSnapshot.val();

						window.localStorage.setItem("employeeData", JSON.stringify(employeeData));
						console.log(childSnapshot.val().emp_fname);
					});
			});
		});

		var employeeData = JSON.parse(window.localStorage.getItem("employeeData"));

		$scope.emp_fname = employeeData.emp_fname;
		$scope.emp_lname = employeeData.emp_lname;
		// $scope.emp_email = employeeData.emp_email;
		$scope.emp_mobileno = employeeData.emp_phone;
		// $scope.emp_address = employeeData.emp_addr;
		$scope.emp_task = employeeData.emp_task;
		$scope.emp_status = employeeData.emp_status;
		$scope.emp_pic = employeeData.emp_image;
		// window.reload();

		$scope.editEmployee = function() {
			var email = $scope.edit_email;
			var mobileno = $scope.edit_mobileno;
			var address = $scope.edit_address;
			var status = $scope.edit_status;
			var task = $scope.edit_task;

			var id = urlParams.get('id');

			// if (email === undefined) {
			// 	email = $scope.emp_email;
			// }

			if (mobileno === undefined) {
				mobileno = $scope.emp_mobileno;
			}

			// if (address === undefined) {
			// 	address = $scope.emp_address;
			// }

			if (status === undefined) {
				status = $scope.emp_status;
			}

			if (task === undefined) {
				task = $scope.emp_task;
			}

			var editEmployeeItem = {
				emp_mobileno: mobileno,
				emp_task: task,
				emp_status: status
			}

			ref.orderByChild("business/owner_username")
				.equalTo(username)
				.on('value', function(snapshot) {

					snapshot.forEach(function(childSnap) {
						// .orderByChild("account/acct_uname")
							// .equalTo(data.account.acct_uname)

						ref.child(childSnap.key)
							.child("business")
							.child("employee/"+id)
							.on('value', function(innerSnapshot) {
								innerSnapshot.ref.update(editEmployeeItem);
								window.localStorage.removeItem("employeeData");
								window.location = "/2/view/owner/landing_employee.php";
							});
					})
				});
			alert("Update Success");
		}

		$scope.back = function() {
			window.localStorage.removeItem("employeeData");
			window.location = "/2/view/owner/landing_employee.php";
		}
});
