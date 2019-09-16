'use strict';

myFirebase.controller('EditAccount', function EditAccount($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;
	var account = JSON.parse(window.localStorage.getItem('accountItem'));

	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get('id');

	// ref.orderByChild("business/owner_username")
	// 	.equalTo(username)
	// 	.on('value', function(snapshot) {

	// 		snapshot.forEach(function(childSnap) {

	// 			// console.log(childSnap.key);

	// 			// ref.child(childSnap.key)
	// 			// 	.child("business/"+id)
	// 			// 	.on('value', function(childSnapshot) {
	// 			// 		console.log(childSnapshot.val());
	// 			// 		var ownerData = childSnapshot.val();

	// 			// 		window.localStorage.setItem("ownerData", JSON.stringify(ownerData));
	// 			// 	});
	// 		});
	// 	});

		// var ownerData = JSON.parse(window.localStorage.getItem("ownerData"));

		// console.log(ownerData);

		// angular.forEach(account, function(val) {
		// 	console.log(val);
		// 	$scope.acc_username = val.acct_uname;
		// 	$scope.acc_email = val.acct_email;
		// 	$scope.acc_password = val.acct_passw;
		// });

		console.log(account);
		$scope.acc_username = account.acct_uname;
		$scope.acc_email = account.acct_email;
		$scope.acc_password = account.acct_passw;
		$scope.acc_status = account.acct_status;
		$scope.acc_type = account.acct_type;

		$scope.editAccount = function() {
			var id = urlParams.get('id');
			var ownerKey = JSON.parse(window.localStorage.getItem("owner_key"));

			var edit_email = $scope.edit_email;
			var edit_username = $scope.edit_username;
			var edit_password = $scope.edit_password;
			var edit_status = $scope.acc_status
			var edit_type = $scope.acc_type;

			if (edit_email === undefined) {
				edit_email = $scope.acc_email;
			}
			if (edit_username === undefined) {
				edit_username = $scope.acc_username;
			}
			if (edit_password === undefined) {
				edit_password = $scope.acc_password;
			}
			
			var accountItem = {
				acct_uname: edit_username,
				acct_passw: edit_password,
				acct_email: edit_email,
				acct_status: edit_status,
				acct_type: edit_type
			}


			
			console.log(id);
			console.log(ownerKey);

			console.log(account[0]);

			ref.child(ownerKey+"/business")
				.child("account")
				.child(id)
				.on('value', function(snapshot) {
					console.log(snapshot.exists());
					console.log(snapshot.val());

					snapshot.ref.update(accountItem);
				});
			
			ref.child(ownerKey+"/business")
				.on('value', function(snap) {
					snap.ref.update({
						owner_username: edit_username
					});
				});

			account.acct_email = edit_email;
			account.acct_uname = edit_username;
			account.acct_passw = edit_password;
			account.acct_type = edit_type;
			account.acct_status = edit_status;

			window.localStorage.setItem("accountItem", JSON.stringify(accountItem));
			alert("Update Success");
			window.location = "/2/view/owner/landing_account.php";
		}

		$scope.back = function() {
			window.location = "/2/view/owner/landing_account.php";
		}
});
