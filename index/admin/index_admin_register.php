<!DOCTYPE html>
<html lang="en" ng-app="myFirebase">
<head>
	<title>DevCash</title>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

	<!-- image icon title -->
	<link rel="shortcut icon" href="img/project-icon.jpg" type="image/x-icon">

	<!-- MyCsslibrary links -->

	<!-- bootstrap library links -->
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-grid.css">
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-grid.min.css">

	<!--- fontawesome library links -->
	<link rel="stylesheet" type="text/css" href="assets/css/font-face.css" media="all">
	<link rel="stylesheet" type="text/css" href="assets/css/theme.css">

	<!-- w3.css library link -->
	<link rel="stylesheet" type="text/css" href="w3/w3.css">
	<link rel="stylesheet" type="text/css" href="w3/w3_icon.css">

    <!-- FontFace CSS library link -->
    <link rel="stylesheet" type="text/css" href="assets/vendor/font-awesome-4.7/css/font-awesome.min.css" media="all">
    <link rel="stylesheet" type="text/css" href="assets/vendor/font-awesome-5/css/fontawesome-all.min.css" media="all">
    <link rel="stylesheet" type="text/css" href="assets/vendor/mdi-font/css/material-design-iconic-font.min.css" media="all">

        <!-- Vendor CSS-->
    <link href="assets/vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
    <link href="assets/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
    <link href="assets/vendor/wow/animate.css" rel="stylesheet" media="all">
    <link href="assets/vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
    <link href="assets/vendor/slick/slick.css" rel="stylesheet" media="all">
    <link href="assets/vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="assets/vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all">

	<!-- Online AngularJS Sripty -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js" integrity="sha256-23hi0Ag650tclABdGCdMNSjxvikytyQ44vYGo9HyOrU=" crossorigin="anonymous"></script>

<!-- CSS Style -->
<style>
body, html{
background-color: #ffffff;
margin: 0px;
font-family: sans-serif;
}


.nav-link{
	color: black;
	padding: 20px;
}

.navbar{
	box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
}

.a:hover{
	color: #ff4d00;
}

.a-register{
	color: white;
}

.a-register:hover{
	color: white;
	opacity: 0.8;
}



#register-botton{
	background-color: #ec4e20;
	cursor: pointer;
	color: white;
}

#register-botton:hover{opacity: 0.9;}

#register-container{
	background-color: white;
	width: 440px;
	height: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 20px;
	box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
	margin-bottom: 30px;
}


.input-register{
	padding: 5px 0px;
	margin-top: 5px;
}


.success-message{
	padding: 20px;
	width: 150px;
	background-color: green;
	color: white;
}

.error {color: #FF0000;}
</style>
</head>

<body class="body"> 	
	
<nav class="navbar">	
	<a class="navbar-brand" href="index.php">
		<img src="img/devcash-logo.png" alt="logo" width="200px" height="60px" style="margin-left: 10px;" title="DevCash">
	</a>	
<ul class="nav justify-content-end">
	<!-- <li class="nav-item">
    	<a class="nav-link a" href="index.php">About Us</a>
  	</li>
  	<li class="nav-item">
  		<a class="nav-link a" href="index_features.php">Features</a>
  	</li>
  	<li class="nav-item">
  		<a class="nav-link a" href="index_pricing.php">Pricing</a>
  	</li> -->
  	<li class="nav-item">
  		<a id="login-botton" class="nav-link a" href="index_admin.php">Login</a>
  	</li>
  	<li class="nav-item">
  		<a class="nav-link a-register" href="index_admin_register.php" style="background:#ec4e20;border-radius: 20px;">Register</a>
  	</li>
</ul>
</nav>

<div class="container" id="container" style="margin-top: 20px;">
	<center>
		<img src="img/hand.png" width="40">
		<h3>Welcome</h3>
		<h4>Register to Devcash</h4>
	</center>
</div>


<!-- Register container modal -->
<div id="register-container" class="container"><br>
<div ng-controller="FormController">
<form class="form-horizontal" ng-submit="register()">
	<br>	
	<h4 style="color: #555;border-bottom: 1px solid #ec4e20;">Admin Info</h4>
	<div class="form-group">
		<div class="col-sm">
			<label class="control-label">First Name</label>
			<span class="error">*</span>
			<input class="form-control" type="text"  name="fname" ng-model="fname">
		</div>
	</div>

	<div class="form-group">
		<div class="col-sm">
			<label class="control-label">Last Name</label>
			<span class="error">*</span>
			<input class="form-control" type="text" name="lname" ng-model="lname">
		</div>
	</div>

	<div class="form-group">
		<div class="col-sm">
			<label class="control-label">User Name</label>
			<span class="error">*</span>
			<input class="form-control" type="text" max="50" name="uname" ng-model="username">
		</div>
	</div>

	<div class="form-group">
		<div class="col-sm">
			<label class="control-label">Email</label>
			<span class="error">*</span>
			<input class="form-control" type="email" name="email" ng-model="email">
		</div>
	</div>		

	<div class="form-group">
		<div class="col-sm">
			<label class="control-label">New Password</label>
			<span class="error">*</span>
			<input class="form-control" type="password" name="password" ng-model="password">
		</div>
	</div>

	<div class="form-group">
			<button class="btn col-sm" type="submit" name="add" style="background-color: #ec4e20;color: white;">Register</button>
	</div>
		
</form>
</div>
<br>
</div>
	   <!-- jquaery library script -->
    <script src="jquery/jquery-1.9.1.min.js"></script>
    <script src="jquery/bootstrap.js"></script>
    <script src="jquery/bootstrap.min.js"></script>
    <script src="jquery/bootstrap.bundle.js"></script>
    <script src="jquery/bootstrap.bundle.min.js"></script>

    <!-- Bootstrap JS-->
    <script src="assets/vendor/bootstrap-4.1/popper.min.js"></script>
    <script src="assets/vendor/bootstrap-4.1/bootstrap.min.js"></script>

    <!-- Vendor JS       -->
    <script src="assets/vendor/slick/slick.min.js">
    </script>
    <script src="assets/vendor/wow/wow.min.js"></script>
    <script src="assets/vendor/animsition/animsition.min.js"></script>
    <script src="assets/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">
    </script>
    <script src="assets/vendor/counter-up/jquery.waypoints.min.js"></script>
    <script src="assets/vendor/counter-up/jquery.counterup.min.js">
    </script>
    <script src="assets/vendor/circle-progress/circle-progress.min.js"></script>
    <script src="assets/vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="assets/vendor/chartjs/Chart.bundle.min.js"></script>
    <script src="assets/vendor/select2/select2.min.js">
    </script>
	
	    <!-- Main JS-->
 	<script src="assets/js/main.js"></script>
 	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/6.3.5/firebase-app.js"></script>

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
	</script>
	<script src="js_controller/app.js"></script>
	<Script src="js_controller/register_admin.js"></Script>
</body>
</html>