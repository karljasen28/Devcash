'use strict';

myFirebase.controller('EditProduct', function EditProduct($scope, $location, $firebaseArray, $firebaseObject) {
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
					.child("product/"+id)
					.on('value', function(childSnapshot) {
						var productData = childSnapshot.val();

						window.localStorage.setItem("productData", JSON.stringify(productData));
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


		var productData = JSON.parse(window.localStorage.getItem("productData"));
		$scope.name = productData.prod_name;
		$scope.brand = productData.prod_brand;
		$scope.cat = productData.category.category_name;
		$scope.unit = productData.prod_unitof_measure;
		$scope.qty = productData.prod_stock;
		$scope.price = productData.prod_price;
		$scope.rop = productData.prod_rop;
		$scope.disc = productData.discount.disc_value;
		$scope.exp = productData.prod_expdate;

		// window.reload();

		$scope.editProduct = function() {
			var prod_name = $scope.prod_name;
			var prod_brand = $scope.prod_brand;
			var prod_cat = $scope.prod_cat;
			var prod_unit = $scope.prod_unit;
			var prod_qty = $scope.prod_qty;
			var prod_price = $scope.prod_price;
			var prod_rop = $scope.prod_rop;
			var prod_status = "Available";

			var prod_disc = $scope.prod_disc;

			var cond_count = 0;
			var cond_name = "New";


			var id = urlParams.get('id');

			if (prod_name === undefined) {
				prod_name = $scope.name;
			}

			if (prod_brand === undefined) {
				prod_brand = $scope.brand;
			}

			if (prod_cat === undefined) {
				prod_cat = $scope.cat;
			}

			if (prod_unit === undefined) {
				prod_unit = $scope.unit;
			}

			if (prod_qty === undefined) {
				prod_qty = $scope.qty;
			}

			if (prod_price === undefined) {
				prod_price = $scope.price;
			}

			if (prod_rop === undefined) {
				prod_rop = $scope.rop;
			}

			if (prod_disc === undefined) {
				prod_disc = $scope.disc;
			}

			if(prod_disc === 0){
				var prod_disc_price = prod_price;
			}
			else {
				var prod_disc_price = prod_price - prod_disc;
			}

			if($scope.prod_exp_date === null) {
				var prod_exp_date = "No Expiration";
			}
			else {
				var prod_exp_date = $scope.prod_exp_date.toLocaleDateString();
			}

			var categoryItem = {
				category_name: prod_cat
			}

			var discountItem = {
				disc_code: "qwerty123",
				disc_value: prod_disc
			}

			var productConditionItem = {
				cond_count: 0,
				cond_name: "New"
			}

			var qrcode = {
				qr_code: prod_name,
				qr_category: "Product",
				qr_price: prod_price,
				qr_disc_price: prod_disc_price,
				qr_reference: prod_name + prod_exp_date
			}

			var editProductItem = {
				category: categoryItem,
				discount: discountItem,
				productCondition: productConditionItem,
				qrCode: qrcode,
				prod_name: prod_name,
				prod_brand: prod_brand,
				prod_unitof_measure: prod_unit,
				prod_expdate: prod_exp_date,
				prod_stock: prod_qty,
				prod_price: prod_price,
				discounted_price: prod_disc_price,
				prod_rop: prod_rop,
				prod_status: "Available",
				prod_reference: prod_name + prod_exp_date
			}

			var qrcodeItem = {
				qr_code: prod_name,
				qr_category: "Product",
				qr_price: prod_price,
				qr_disc_price: prod_disc_price,
				qr_reference: prod_name + prod_exp_date
			}

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

			ref.orderByChild("business/owner_username")
				.equalTo(username)
				.on('value', function(snapshot) {

					snapshot.forEach(function(childSnap) {
						// .orderByChild("account/acct_uname")
							// .equalTo(data.account.acct_uname)

						ref.child(childSnap.key)
							.child("business")
							.child("product/"+id)
							.on('value', function(innerSnapshot) {
								innerSnapshot.ref.update(editProductItem);
								window.localStorage.removeItem("productData");
								window.location = "/2/view/owner/landing_product.php";
							});
					})
				});

			alert("Update Success");
		}

		$scope.back = function() {
			window.localStorage.removeItem("productData");
			window.location = "/2/view/owner/landing_product.php";
		}
});
