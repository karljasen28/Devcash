<!DOCTYPE html>
<html ng-app="myFirebase">
<head>
	<title>QR CODE</title>
	 <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <title>Devcash QR</title>

    <link rel="shortcut icon" href="images/logo_new_cart.png" type="image/x-icon">


    <!-- Fontfaces CSS-->
    <link href="css/font-face.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all">
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">

    <!-- Bootstrap CSS-->
    <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all">

    <!-- Vendor CSS-->
    <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
    <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
    <link href="vendor/wow/animate.css" rel="stylesheet" media="all">
    <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
    <link href="vendor/slick/slick.css" rel="stylesheet" media="all">
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all">
    <link href="vendor/vector-map/jqvmap.min.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="css/theme.css" rel="stylesheet" media="all">

    <!-- Online AngularJS Sripty -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js" integrity="sha256-23hi0Ag650tclABdGCdMNSjxvikytyQ44vYGo9HyOrU=" crossorigin="anonymous"></script>
    <script src="qrcode/qrcode.js"></script>
    <script src="qrcode/qrcode.min.js"></script>

    <style type="text/css">
    	body{
    		background:#f1f1f1;
    	}
    	.container1{
    		background-color: #ffffff;
    		padding: 20px;
    		border:	1px solid black;
    		border-radius: 10px;
    		margin-top: 100px;
    		margin-right: auto;
    		margin-left: auto;
    		}

    	td{
    		font-size: 20px;
    	}
    </style>
</head>
<body class="animsition">
<div ng-controller="QR">
    <div id="qrCode-form">
	<div class="row">
		<div class="container1">
				<div id="code"></div>
		</div>
	</div>
	<br>
    <center>
        <table>
            <tr ng-repeat="qr in qr_datas">
                <td>Item: {{qr.service_name}}</td>
            </tr>
            <tr ng-repeat="qr in qr_datas">
                <td>Price: ₱ {{qr.discounted_price}}</td>
            </tr>
        </table>
    </center>
</div>
		<br>
		<div style="text-align: center;">
			<button ng-click="exportQR()" class="btn btn-success">Export</button>
			<button class="btn btn-info" ng-click="back()">back to inventory</button>
		</div>
</div>
    </script>
	    <!-- Jquery JS-->
    <script src="vendor/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap JS-->
    <script src="vendor/bootstrap-4.1/popper.min.js"></script>
    <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
    <!-- Vendor JS       -->
    <script src="vendor/slick/slick.min.js">
    </script>
    <script src="vendor/wow/wow.min.js"></script>
    <script src="vendor/animsition/animsition.min.js"></script>
    <script src="vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">
    </script>
    <script src="vendor/counter-up/jquery.waypoints.min.js"></script>
    <script src="vendor/counter-up/jquery.counterup.min.js">
    </script>
    <script src="vendor/circle-progress/circle-progress.min.js"></script>
    <script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="vendor/chartjs/Chart.bundle.min.js"></script>
    <script src="vendor/select2/select2.min.js">
    </script>
    <script src="vendor/vector-map/jquery.vmap.js"></script>
    <script src="vendor/vector-map/jquery.vmap.min.js"></script>
    <script src="vendor/vector-map/jquery.vmap.sampledata.js"></script>
    <script src="vendor/vector-map/jquery.vmap.world.js"></script>


    <!-- Main JS-->
    <script src="js/main.js"></script>
    <script src="js/datatables.min.js"></script>

    <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>
        <!-- TODO: Add SDKs for Firebase products that you want to use
                 https://firebase.google.com/docs/web/setup#config-web-app -->
        <!-- Add this to enable firebase database to our application -->
        <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-database.js"></script>
        <!-- Load angularfire -->
        <script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script>
          // Your web app's Firebase configuration
          var firebaseConfig = {
            apiKey: "AIzaSyBhLhsGQJsMHrNRPCEaz1Fj3O85AEV6Dww",
            authDomain: "devcashpos-app.firebaseapp.com",
            databaseURL: "https://devcashpos-app.firebaseio.com",
            projectId: "devcashpos-app",
            storageBucket: "devcashpos-app.appspot.com",
            messagingSenderId: "946062674376",
            appId: "1:946062674376:web:570cf0c7596d7000"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

var myFirebase = angular.module('myFirebase', ['firebase']);
myFirebase.controller('QR', function QR($scope, $location, $firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref().child("datadevcash/owner");
    var qrdatas = $firebaseArray(ref);

	var user = JSON.parse(window.localStorage.getItem('user'));
	var username = user.owner_username;

	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get('id');
    $scope.datas = [];

	ref.orderByChild("business/owner_username")
		.equalTo(username)
		.on('value', function(snapshot) {

			snapshot.forEach(function(childSnap) {

				ref.child(childSnap.key)
					.child("business")
					.child("services/"+id)
					.on('value', function(childSnapshot) {
						$scope.datas = childSnapshot.val();                        
                        $scope.name = $scope.datas.qrCode.qr_code;
                        var reference = $scope.datas.qrCode.qr_reference;
                        var code = 'code';
                        new QRCode(document.getElementById("code"), {
                                text: reference,
                                width: 250,
                                height: 250,
                                colorDark : "#000000",
                                colorLight : "#ffffff",
                                correctLevel : QRCode.CorrectLevel.H
                            });
					});
			});
		});

        $scope.qr_datas = [];
        ref.orderByChild("business/owner_username")
            .equalTo(username)
            .on('value', function(snap){
                snap.forEach(function(childSnap){
                    console.log(childSnap.val());

                    angular.forEach(childSnap.val().business.services, function(data,key){
                        data['id'] = key;
                        console.log(key);

                        if(id === key){
                            $scope.qr_datas.push(data);
                            console.log($scope.qr_datas);
                        }
                    })
                })
            })

		$scope.back = function() {
			// window.localStorage.removeItem("qrData");
			window.location = "/2/view/owner/landing_service.php";
		}

        $scope.exportQR = function(){
            var printContents = document.getElementById('qrCode-form').innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;

            window.print();
            document.body.innerHTML = originalContents;
        }
});

    </script>
    <script src="js_controller/getuserlogin.js"></script>
    <script src="js_controller/logout.js"></script>

</body>
</html>