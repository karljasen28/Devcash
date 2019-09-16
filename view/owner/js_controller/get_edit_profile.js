'use strict';

myFirebase.controller('EditProfile', function EditProfile($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	var urlParams = new URLSearchParams(window.location.search);

		$scope.owner_fname = user.owner_fname;
		$scope.owner_lname = user.owner_lname;
		$scope.owner_gender = user.owner_gender;
		$scope.owner_mobileno = user.owner_mobileno;
		// $scope.owner_bdate = user.owner_bdate;

	// var fileToUpload = null;
 //    $scope.onChange = function onChange(fileList) {
 //        fileToUpload = fileList[0];
 //    };		

		$scope.editProfile = function() {
			var id = urlParams.get('id');
			var fname = $scope.fname;
			var lname = $scope.lname;
			// var bdate = $scope.bdate;
			var gender = $scope.gender;
			var mobileno = $scope.mobileno;

			if (fname === undefined) {
				fname = $scope.owner_fname;
			}
			if (lname === undefined) {
				lname = $scope.owner_lname;
			}
			
			if (gender === undefined) {
				gender = $scope.owner_gender;
			}
			
			if (mobileno === undefined) {
				mobileno = $scope.owner_mobileno;
			}

			var ownerItem = {
				owner_fname: fname,
				owner_lname: lname,
				owner_gender: gender,
				owner_mobileno: mobileno
			}


			ref.child(id)
				.child("business")
				.on('value', function(snapshot) {
					console.log(snapshot.val().account);
					if(snapshot.exists()) {
						snapshot.ref.update(ownerItem);
					}
				})

		user.owner_fname = fname;
		user.owner_lname = lname;
		user.owner_gender = $scope.gender;
		user.owner_mobileno = mobileno;

		window.localStorage.setItem("user", JSON.stringify(user));

		alert("Update Success");
		window.location = "/2/view/owner/landing_account.php";
		}

		$scope.back = function() {
			window.location = "/2/view/owner/landing_account.php";
		}
});
