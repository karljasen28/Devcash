<!DOCTYPE html>
<html lang="en" ng-app="myFirebase">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Devcash</title>
  <!-- icon logo -->
  <link rel="shortcut icon" href="image/logo_new_cart.png" >
  <!-- <link rel="icon" href="view/assets/img/icon.png"> -->
  <!-- Bootstrap core CSS -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <!-- Custom fonts for this template -->
  <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

  <!-- Plugin CSS -->
  <!-- <link href="view/assets/vendor/magnific-popup/magnific-popup.css" rel="stylesheet"> -->

  <!-- Custom styles for this template -->
  <link href="assets/css/creative.css" rel="stylesheet">

  <!-- Online AngularJS Sripty -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js" integrity="sha256-23hi0Ag650tclABdGCdMNSjxvikytyQ44vYGo9HyOrU=" crossorigin="anonymous"></script>

  <style>
.img-wrapper {
  position: relative;
 }

.img-responsive {
  width: 100%;
  /* height: auto; */
}

.img-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.img-overlay:before {
  content: ' ';
  display: block;
  /* adjust 'height' to position overlay content vertically */
  height: 70%;
}

hr{ 
  border:         none;
  border-left:    1px solid ;
  height:         auto;
  width:          1px;       
}
  </style>
</head>

<body id="page-top">

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <img src="image/logo_new_square.png" alt="Logo" class="responsive-img" style="height: 4rem">

      </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger custom-text" href="index.php#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger custom-text" href="index.html#services">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger custom-text" href="index.html#pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  custom-text" href="login.php">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  custom-text text-white" style="background-color: #ec4e20; color: white;" href="register.php">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


 

  <section  >
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-center">
            <img src="image/hand.png" style="width: 80px;" alt="hand">
          </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
          <div class="col-lg-8 text-center mt-3">
            <h3 class="section-heading ">Welcome back to Devcash</h3>
            <h5 class="mt-3" style="color: gray">Log in to get going!</h5>
          </div>
      </div>
    </div>
    <div class="container" ng-controller="FormController">
      <div class="row justify-content-md-center"  >
        <div class="col-lg-5 mt-5" >
          <div class="card" style="box-shadow: 2px 2px 15px -5px #6d6c6c;">
              <form class="form-horizontal">
                  <div class="card-body">
                    <div class="form-group">
                      <label for=""><b>Username</b></label>
                      <span style="color: red">*</span>
                      <input type="text" ng-model="owner_username" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for=""><b>Password</b></label>
                      <span style="color: red">*</span>
                      <input type="password" ng-model="owner_password" class="form-control">
                    </div>
                    <div class="form-group mt-4">
                        <button class="btn col-sm" type="submit" ng-click="login()" style="background-color: #ec4e20;color: white;">
                            Login
                        </button>
                    </div>
                    <div class="form-group text-center mt-4">
                        <label for="">
                            <a href="term_condition.html" style="color: blue"><u>Forgot password?</u></a> 
                        </label>
                    </div>
                    <div class="form-group text-center ">
                        <label for="">  
                                Don’t have an account? &nbsp;<a href="register.html" style="color: orangered"><u>Register here</u></a> 
                        </label>
                    </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </section>
 

  <!-- Bootstrap core JavaScript -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/scrollreveal/scrollreveal.min.js"></script>
  <script src="assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="assets/js/creative.min.js"></script>
  <script src="assets/js/sweetalert2.min.js"></script>

  <script src="js_controller/app.js"></script>
  <script src="js_controller/login.js"></script>
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
</body>
</html>