'use strict';
myFirebase.controller('EditDiscount', function EditDiscount($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get('id');

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snapshot) {

			snapshot.forEach(function(childSnap) {

				ref.child(childSnap.key)
					.child("business")
					.child("discount/"+id)
					.on('value', function(childSnapshot) {

						window.localStorage.setItem("discountData", JSON.stringify(discountData));
					});
			});
		});
		
		var discountData = JSON.parse(window.localStorage.getItem("discountData"));
		// ng-value
		$scope.disc_code = discountData.disc_code;
		$scope.disc_value = discountData.disc_value;
		$scope.disc_start = discountData.disc_start;
		$scope.disc_end = discountData.disc_end;

		$scope.editDiscount = function() {
			//ng-model
			var disc_code = $scope.edit_disccode;
			var disc_val = $scope.edit_value;
			var disc_start = $scope.edit_discstart;
			var disc_end = $scope.edit_discend;
			var disc_status = "Active";

			var id = urlParams.get('id');

			if (disc_code === undefined) {
				disc_code = $scope.edit_disccode;
			}

			if (disc_val === undefined) {
				disc_val = $scope.edit_value;
			}

			if (disc_start === undefined) {
				disc_start = $scope.edit_discstart;
			}

			if (disc_end === undefined) {
				disc_end = $scope.edit_discend;
			}

			var editDiscountItem = {
				disc_code: disc_code,
				disc_value: disc_val,
				disc_start: disc_start.toLocaleDateString(),
				disc_end: disc_end.toLocaleDateString(),
				disc_status: disc_status
			}

			ref.orderByChild("business/owner_username")
				.equalTo(username)
				.on('value', function(snapshot) {

					snapshot.forEach(function(childSnap) {
						// .orderByChild("account/acct_uname")
							// .equalTo(data.account.acct_uname)

						ref.child(childSnap.key)
							.child("business")
							.child("discount/"+id)
							.on('value', function(innerSnapshot) {
								innerSnapshot.ref.update(editDiscountItem);
								window.localStorage.removeItem("discountData");
								window.location = "/2/view/owner/landing_discount.php";
							});
					})
				});
			alert("Update Success");
		}

		$scope.back = function() {
			window.localStorage.removeItem("discountData");
			window.location = "/2/view/owner/landing_discount.php";
		}


		// ref.orderByChild("business/owner_username")
		// 	.equalTo(username)
		// 	.on('value', function(snapshot) {

		// 		snapshot.forEach(function(childSnap) {
		// 			// .orderByChild("account/acct_uname")
		// 				// .equalTo(data.account.acct_uname)

		// 			ref.child(childSnap.key)
		// 				.child("business")
		// 				.child("employee/"+id)
		// 				.on('value', function(innerSnapshot) {
		// 					innerSnapshot.ref.update(editEmployeeItem);
		// 					alert("Update Success");
		// 					window.location = "/2/view/owner/landing_employee.php";
		// 				});
		// 		})
		// 	})
	

	// ref.orderByChild("business/owner_username")
	// 	.equalTo(username)
	// 	.on('value', function(snap) {
	// 		// console.log(snap.val());

	// 		snap.forEach(function(childSnap) {
	// 			childSnap.forEach(function(innerChild) {

	// 				angular.forEach(innerChild.val().employee, function(child, key) {
	// 					// console.log(child["id"] =);
	// 					// console.log(key);
	// 					child["id"] = key
	// 					$scope.employees.push(child);
	// 					$scope.emp_fname = child.emp_fname;
	// 					$scope.emp_lname = child.emp_lname;
	// 					$scope.emp_email = child.emp_email;
	// 					$scope.emp_mobileno = child.emp_mobileno;
	// 					$scope.emp_address = child.emp_addr;
	// 					$scope.emp_bdate = child.emp_bdate;
	// 					$scope.emp_task = child.emp_task;
	// 					$scope.emp_status = child.emp_status;
	// 				});
	// 			});
	// 		});
	// });
});
