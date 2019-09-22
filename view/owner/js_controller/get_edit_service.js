'use strict';

myFirebase.controller('EditService', function EditService($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	var refStorage = firebase.storage();
	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;
	var ownerKey = JSON.parse(window.localStorage.getItem('owner_key'));
	$scope.ownerKey = ownerKey;
	console.log($scope.ownerKey);

	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get('id');

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snapshot) {

			snapshot.forEach(function(childSnap) {

				ref.child(childSnap.key)
					.child("business")
					.child("services/"+id)
					.on('value', function(childSnapshot) {
						var serviceData = childSnapshot.val();

						window.localStorage.setItem("serviceData", JSON.stringify(serviceData));
						console.log(childSnapshot.val().service_name);
						console.log(childSnapshot.val().category.category_name);
					});
			});
		});

			var catref = firebase.database().ref().child("datadevcash/owner");
		$scope.category = $firebaseArray(ref);
		$scope.categories = [];
		catref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snap) {
				// console.log(snap.val());
				snap.forEach(function(childSnap) {
					// console.log(childSnap.val());

					angular.forEach(childSnap.val().business.category, function(data) {
						console.log(data);
						$scope.categories.push(data);
					});
				});
			});

			var discref = firebase.database().ref().child("datadevcash/owner");
		$scope.discount = $firebaseArray(ref);
		$scope.discounts = [];
			discref.orderByChild("business/owner_username")
			.equalTo(username)
			.on('value', function(snap) {
				console.log(snap.val());
				snap.forEach(function(childSnap) {
					console.log(childSnap.val());

					angular.forEach(childSnap.val().business.discount, function(data) {
						console.log(data);
						$scope.discounts.push(data);
					});
				});
			});


		var serviceData = JSON.parse(window.localStorage.getItem("serviceData"));

		$scope.service_name = serviceData.service_name;
		$scope.service_cat = serviceData.category.category_name;
		$scope.service_price = serviceData.service_price;
		$scope.service_disc = serviceData.discount.disc_value;
		$scope.service_pic = serviceData.service_image;
		$scope.service_status = serviceData.service_status;

		// window.reload();

		$scope.editService = function() {
			var serv_name = $scope.serv_name;
			var serv_cat = $scope.serv_cat;
			var serv_price = $scope.serv_price;
			var serv_disc = $scope.serv_disc;
			var serv_status = $scope.serv_status;

			var serv_disc_price = serv_price - serv_disc;

			var id = urlParams.get('id');

			
			// var setProfile = pic.files[0];
   //  		var upload = refStorage.ref("Service/" + ( + new Date() ) + setProfile.name);
			
			if (serv_name === undefined) {
				serv_name = $scope.service_name;
			}

			if (serv_cat === undefined) {
				serv_cat = $scope.service_cat;
			}

			if (serv_price === undefined) {
				serv_price = $scope.service_price;
			}

			if (serv_disc === undefined) {
				serv_disc = $scope.service_disc;
			}

			if(serv_disc === 0){
				var serv_disc_price = serv_price;
			}
			else{
				var serv_disc_price = serv_price - serv_disc;
			}

			if(serv_status === undefined){
				serv_status = $scope.service_status;
			}

			var categoryItem = {
				category_name: serv_cat
			}

			var discountItem = {
				disc_code: "qwerty123",
				disc_value: serv_disc
			}

			var qrCode = {
				qr_code: serv_name,
				qr_category: "Services",
				qr_price: serv_price,
				qr_reference: serv_name + serv_price
			}

			var editServiceItem = {
				category: categoryItem,
				discount: discountItem,
				qrCode: qrCode,
				service_name: serv_name,
				service_price: serv_price,
				discounted_price: serv_disc_price,
				service_status: serv_status
			}

			var qrcodeItem = {
				qr_code: serv_name,
				qr_category: "Services",
				qr_price: serv_price,
				qr_reference: serv_name + serv_price
			}

			$scope.data = [];
			ref.orderByChild("business/owner_username")
				.equalTo(username)
				.on('value', function(snapshot) {

					snapshot.forEach(function(childSnap) {
						// .orderByChild("account/acct_uname")
							// .equalTo(data.account.acct_uname)

						ref.child(childSnap.key)
							.child("business")
							.child("services/"+id)
							.on('value', function(innerSnapshot) {
								innerSnapshot.ref.update(editServiceItem);
								// console.log(innerSnapshot.val());
								// $scope.data = innerSnapshot.val().service_name;
								// console.log($scope.data);

								// if($scope.data.length > 0) {
								// 	for(var i=0;i < $scope.data.length;i++) {
								// 		if($scope.data[i] === serv_name) {
								// 			alert(serv_name+" item already exist");
								// 			return;
								// 		}
								// 	}
								// }
							});
					})
				});

			ref.orderByChild("business/owner_username")
				.equalTo(username)
				.on('value', function(snapshot) {
					snapshot.forEach(function(childSnap) {
						ref.child(childSnap.key)
							.child("business")
							.child("qrCode/"+id)
							.on('value', function(innerSnapshot) {
								innerSnapshot.ref.update(qrcodeItem);
							});
					});
				});

			alert("Update Success");
			window.localStorage.removeItem("serviceData");
			window.location = "/2/view/owner/landing_service.php";
		}

		$scope.back = function() {
			window.localStorage.removeItem("serviceData");
			window.location = "/2/view/owner/landing_service.php";
		}
});
