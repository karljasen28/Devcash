'use strict';

myFirebase.controller('EditEnterprise', function EditEnterprise($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	console.log(user.enterprise.ent_name);
	var urlParams = new URLSearchParams(window.location.search);

		$scope.ent_name = user.enterprise.ent_name;
		$scope.ent_type = user.enterprise.ent_type;
		$scope.ent_cat = user.enterprise.ent_cat;
		$scope.no_emp = user.enterprise.ent_no_emp;
		$scope.ent_add = user.enterprise.ent_addr;
		$scope.ent_contact = user.enterprise.ent_telno;
		$scope.ent_email = user.enterprise.ent_email;
		$scope.ent_permit = user.enterprise.ent_permitno;
		$scope.ent_tin = user.enterprise.ent_tin;

		$scope.editEnterprise = function() {
			var id = urlParams.get('id');
			var ent_name = $scope.name;
			var ent_type = $scope.type;
			var ent_cat;
			var ent_no_emp = $scope.ent_no_emp;
			var ent_addr = $scope.address;
			var ent_telno = $scope.contact;
			var ent_email = $scope.email;
			var ent_permitno = $scope.permit;

			if (ent_name === undefined) {
				ent_name = $scope.ent_name;
			}

			if (ent_type === undefined) {
				ent_type = $scope.ent_type;
			}

			if (ent_cat === undefined) {
				ent_cat = $scope.ent_cat;
			}

			if (ent_no_emp === undefined) {
				ent_no_emp = $scope.no_emp;
			}

			if (ent_addr === undefined) {
				ent_addr = $scope.ent_add;
			}

			if (ent_telno === undefined) {
				ent_telno = $scope.ent_contact;
			}

			if (ent_email === undefined) {
				ent_email = $scope.ent_email;
			}

			if (ent_permitno === undefined) {
				ent_permitno = $scope.ent_permit;
			}

			if(ent_no_emp > 1 && ent_no_emp <= 9)
			{
				ent_cat = "Micro";
			}else if(ent_no_emp >= 10 && ent_no_emp <= 99)
			{
				ent_cat = "Small";
			}else
			{
				ent_cat = "Medium";
			}	

			var enterpriseItem = {
				ent_name: ent_name,
				ent_type: ent_type,
				ent_cat: ent_cat,
				ent_no_emp: ent_no_emp,
				ent_addr: ent_addr,
				ent_telno: ent_telno,
				ent_email: ent_email,
				ent_permitno: ent_permitno
			}

			ref.child(id)
				.child("business/enterprise")
				.on('value', function(snapshot) {
					console.log(snapshot.val().account);
					if(snapshot.exists()) {
						snapshot.ref.update(enterpriseItem);
					}
				})

		
		user.enterprise.ent_name = ent_name;
		user.enterprise.ent_type = ent_type;
		user.enterprise.ent_cat = ent_cat;
		user.enterprise.ent_no_emp = ent_no_emp;
		user.enterprise.ent_addr = ent_addr;
		user.enterprise.ent_telno = ent_telno;
		user.enterprise.ent_email = ent_email;
		user.enterprise.ent_permitno = ent_permitno;


		window.localStorage.setItem("user", JSON.stringify(user));

		alert("Update Success");
		window.location = "/2/view/owner/landing_account_enterprise.php";
		}

		// $scope.back = function() {
		// 	window.location = "/2/view/owner/landing_account.enterprise.php";
		// }
});
