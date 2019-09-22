'user strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	var storageRef = firebase.storage();
	$scope.service = $firebaseArray(ref);
	$scope.db = null;
	$scope.dbqr = null;

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

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

	$scope.addService = function()
	{
		var serv_name = $scope.serv_name;
		var serv_cat = $scope.serv_cat;
		var serv_price = $scope.serv_price;
		var serv_disc = parseFloat($scope.serv_disc);
		var serv_status = "Available";
		var qr_code = $scope.serv_name;
		var qr_price = $scope.serv_price;

		var setProfile = pic.files[0];
		if(setProfile == null){
			alert("Image must be provided");
		}
		else{
		var upload = storageRef.ref("Service/" + ( + new Date() ) + setProfile.name);
		}
		
		if(serv_disc === 0){
			var serv_disc_price = serv_price;
		}
		else{
			var serv_disc_price = serv_price - serv_disc;
		}

		var discItem = {
			disc_code: "qwerty123",
			disc_value: serv_disc
		}

		var category = {
			category_name: serv_cat
		}

		var qrcode = {
			qr_code: serv_name,
			qr_category: "Service",
			qr_price: serv_price,
			qr_disc_price: serv_disc_price,
			qr_reference: serv_name + serv_price
		}


		var serviceItem = {
			category: category,
			discount: discItem,
			qrCode: qrcode,
			service_name: serv_name,
			service_price: serv_price,
			discounted_price: serv_disc_price,
			service_status: serv_status,
		}

		var qr = {
			qr_code: qr_code,
			qr_category: "Service",
			qr_price: qr_price,
			qr_disc_price: serv_disc_price,
			qr_reference: serv_name + serv_price
		}


		ref.orderByChild("business/owner_username")
			.startAt(username)
			.endAt(username)
			.on('value', function(snap) {
				console.log(snap.val());
				snap.forEach(function(data) {
					console.log(data.key);
					$scope.ownerKey = data.key;
				});
			});
		
	var serviceRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/services");
	$scope.db = $firebaseArray(serviceRef);
	
	var qrRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/qrCode");
	$scope.dbqr = $firebaseArray(qrRef);
	
	$scope.data = [];
	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.once('value', function(snap){
			snap.forEach(function(childSnap){
				angular.forEach(childSnap.val().business.services, function(data){
					$scope.data.push(data.service_name);
				})
			})
		})	

		
		if(serv_name == null || serv_cat == null || serv_price == null || serv_disc == null) {
			alert("All fields must be provided");
			return;
		}

		if ($scope.data.length > 0) {
			// we got items inside array
			console.log($scope.data);

			for(var i = 0; i < $scope.data.length; i++) {
				if ($scope.data[i] === serv_name) {
					alert(serv_name+" is already exist");
					return;
				}	
			}

			// $scope.dbqr.$add(qr);
			// $scope.db.$add(serviceItem);
			// alert("Service Added Successfully");
			// window.location = "/2/view/owner/landing_service.php";

			upload.put(setProfile)
	        .then( setProfile => setProfile.ref.getDownloadURL() )
	        .then( url => {
	            serviceRef.push({
	            	qrCode: qr,
	            	category: category,
	            	discount: discItem,
	                service_image: url,
	                category: category,
					discount: discItem,
					qrCode: qrcode,
					service_name: serv_name,
					service_price: serv_price,
					discounted_price: serv_disc_price,
					service_status: serv_status,

	            });
	            alert("Service Item Added");
	            window.location = "/2/view/owner/landing_service.php";
	        });
		}
		else {
			// we add the item if not duplicate.
			// $scope.dbqr.$add(qr);
			// $scope.db.$add(serviceItem);
			// alert("Service Added Successfully");
			// window.location = "/2/view/owner/landing_service.php";
			upload.put(setProfile)
	        .then( setProfile => setProfile.ref.getDownloadURL() )
	        .then( url => {
	            serviceRef.push({
	            	qrCode: qr,
	            	category: category,
	            	discount: discItem,
	                service_image: url,
	                category: category,
					discount: discItem,
					qrCode: qrcode,
					service_name: serv_name,
					service_price: serv_price,
					discounted_price: serv_disc_price,
					service_status: serv_status,

	            });
	            alert("Service Item Added");
	            window.location = "/2/view/owner/landing_service.php";
	        });
		}
		
	}
}); 