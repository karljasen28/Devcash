	'use strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
	$scope.product = $firebaseArray(ref);
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
			console.log(snap.val());
			snap.forEach(function(childSnap) {
				console.log(childSnap.val());

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

	$scope.addProduct = function()
	{
		var prod_name = $scope.prod_name;
		var prod_brand = $scope.prod_brand;
		var prod_price = $scope.prod_price;
		// var prod_exp_date = $scope.prod_exp_date.toLocaleDateString();
		var prod_rop = $scope.prod_rop;
		var prod_status = "Available";
		var prod_stock = $scope.prod_qty;
		var prod_unit = $scope.prod_unit;
		
		var prod_cat = $scope.prod_cat;
		
		var prod_condition = "New";
		var prod_cond_count = 0;
		
		var prod_disc = parseFloat($scope.prod_disc);

		if(prod_disc === 0){
			var prod_disc_price = prod_price;
		}
		else{
			var prod_disc_price = prod_price - prod_disc;
		}

		var category = {
			category_name: prod_cat
		}

		var discount = {
			disc_code: "qwerty123",
			disc_value: prod_disc
		}

		var productCondition = {
			cond_count: prod_cond_count,
			cond_name: prod_condition
		}	

		if($scope.prod_exp_date === null) {
			var prod_exp_date = "No Expiration";
		}
		else {
			var prod_exp_date = $scope.prod_exp_date.toLocaleDateString();
		}

		var qrcodeItem = {
			qr_code: prod_name,
			qr_category: "Product",
			qr_price: prod_price,
			qr_disc_price: prod_disc_price,
			qr_reference: prod_name + prod_exp_date
		}

		var productItem = {
			category: category,
			discount: discount,
			qrCode: qrcodeItem,
			productCondition: productCondition,
			prod_name: prod_name,
			prod_brand: prod_brand,
			prod_price: prod_price,
			discounted_price: prod_disc_price,
			prod_expdate: prod_exp_date,
			prod_stock: prod_stock,
			prod_rop: prod_rop,
			prod_status: prod_status,
			prod_unitof_measure: prod_unit,
			prod_reference: prod_name + prod_exp_date
		}

		var qrItem = {
			qr_code: prod_name,
			qr_category: "Product",
			qr_price: prod_price,
			qr_disc_price: prod_disc_price,
			qr_reference: prod_name + prod_exp_date
		}


		ref.orderByChild("business/owner_username")
			.startAt(username)
			.endAt(username)
			.on('value', function(snap) {
				snap.forEach(function(data) {
					$scope.ownerKey = data.key;
				});
			});

		var productRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/product");
		$scope.db = $firebaseArray(productRef);

		var qrRef = firebase.database().ref().child("datadevcash/owner/"+$scope.ownerKey+"/business/qrCode")
		$scope.dbqr = $firebaseArray(qrRef);

		// $scope.data_name = [];
		// $scope.data_brand = [];
		$scope.data = [];
		ref.orderByChild("business/owner_username")
			.equalTo(username)
			.once('value', function(snap){
				snap.forEach(function(childSnap){
					angular.forEach(childSnap.val().business.product, function(data){
						$scope.data.push(data.prod_name);
						// $scope.data_name.push(data.prod_name);
						// $scope.data_brand.push(data.prod_brand);
						// $scope.data = $scope.data_name + $scope.data_brand;
					})
				})
			})

	if(prod_name == null || prod_brand == null || prod_price == null || prod_cat == null || prod_stock == null || prod_disc == null || prod_rop == null) {
		alert("All fields must be provided");
		return;
	}

		if($scope.data.length > 0) {
			console.log($scope.data);

			for(var i=0;i < $scope.data.length;i++){
				if ($scope.data[i] === prod_name) {
					alert(prod_name+" is already exist");
					return;
				}
			}

			$scope.dbqr.$add(qrItem);	
			$scope.db.$add(productItem);
			alert('Success');
			window.location = "/2/view/owner/landing_product.php";
			window.location = "/2/view/owner/landing_product.php";
		}
		else {
			$scope.dbqr.$add(qrItem);	
			$scope.db.$add(productItem);
			alert('Success');
			window.location = "/2/view/owner/landing_product.php";
			window.location = "/2/view/owner/landing_product.php";
		}
	}
});