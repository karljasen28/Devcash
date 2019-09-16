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
            <h3 class="section-heading ">Welcome to Devcash</h3>
            <p class="mt-3">In order to activate your Devcash account, please fill-in your business profile and indicate your acceptance of <a href="term_condition.html" style="color: blue"><u>Terms and Conditions.</u></a> Upon acceptance, you will receive an email with instructions on how to activate your account for Android.</p>
          </div>
      </div>
    </div>
    <div class="container" ng-controller="RegisterForm">
      <div class="row justify-content-md-center"  >
        <div class="col-lg-8 mt-5" >
          <div class="card" style="box-shadow: 2px 2px 15px -5px #6d6c6c;">
              <form class="form-horizontal">
                  <div class="card-body">
                    <div class="form-group">
                      <label for=""><b>Enterprise Name</b></label>
                      <span style="color: red">*</span>
                      <input type="text" ng-model="enterprise_name" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for=""><b>Enterprise Type</b></label>
                      <span style="color: red">*</span>
                      <select name="select" ng-model="enterprise_type" class="form-control">
                          <option hidden>Please select</option>
                          <option value="Retail">Supplies</option>
                          <option value="Hardware">Hardware</option>
                          <option value="Merchandise">Merchandise</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for=""><b>Number of Employess(s)</b></label>
                      <span style="color: red">*</span>
                      <input type="number" min="1" ng-model="no_employee" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for=""><b>Enterprise Address</b></label>
                      <span style="color: red">*</span>
                      <input type="text" ng-model="enterprise_address" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for=""><b>Business Permit</b></label>
                      <span style="color: red">*</span>
                      <input type="text" ng-model="enterprise_permit" class="form-control">
                    </div>
                    <div class="row form-group">
                        <div class="col ">
                          <label for=""><b>First Name</b></label>
                          <span style="color: red">*</span>
                          <input type="text" ng-model="owner_fname" class="form-control">
                        </div>
                        <div class="col ">
                          <label for=""><b>Last Name</b></label>
                          <span style="color: red">*</span>
                          <input type="text" ng-model="owner_lname"class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                      <label for=""><b>Gender</b></label>
                      <span style="color: red">*</span>
                      <select name="select" ng-model="owner_gender" class="form-control">
                          <option hidden>Please select</option>
                          <option>Male</option>
                          <option>Female</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for=""><b>Mobile Number</b></label>
                      <span style="color: red">*</span>
                      <input type="text" ng-model="owner_mobileno" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for=""><b>Email</b></label>
                      <span style="color: red">*</span>
                      <input type="email" ng-model="owner_email" class="form-control">
                    </div>
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
                    <div class="row form-group">
                        <div class="col">
                          <label for="">&nbsp;&nbsp;&nbsp;
                            <input  type="checkbox" name="aggree">&nbsp;&nbsp;&nbsp;
                            I agree with <a href="term_condition.html" style="color: blue"><u>Terms & Conditions*</u></a> 
                          </label>
                        </div>
                    </div>
                    <div class="form-group">
                      <button class="btn col-sm" type="submit" ng-click="register()" style="background-color: #ec4e20;color: white;">Register</button>
                    </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <!-- <section> -->
  <footer class=" mt-auto py-3 " style="background-color: rgb(71, 70, 70); color: white">
    <div class="container">
      <div class="row">
          <div class="col-md-3">
              <!-- <div class="card" style="background-color: rgb(71, 70, 70); color: white"> -->
                  <div class="card-body">
                      <h4 class="card-title mb-3"><b>Email Updates</b> </h4>
                      <p class="card-text">
                          Be the first to hear about our offers and announcements.
                      </p>
                      <div class="col col-md-12">
                          <div class="input-group">
                              <input type="email" id="input2-group2" name="input2-group2" placeholder="Enter email address" class="form-control">
                              <div class="input-group-btn">
                                  <button class="btn btn-success">Go</button>
                              </div>
                          </div>
                      </div>
                  </div>
              <!-- </div> -->
          </div>
          <hr>
          <div class="col-lg-3" >
              <!-- <div class="card" style="background-color: rgb(71, 70, 70); color: white"> -->
                  <div class="card-body" >
                      <h4 class="card-title mb-3"><b>Import Links</b> </h4>  
                      <div><a style="color: white" href="#about">About</a></div>
                      <div>Privacy &amp; Policy</div>
                      <div><a style="color: white" href="#">Terms &amp; Condition</a></div>
                      <div>Contact</div>
                      <div><a style="color: white" href="#">Review</a></div>
                      <div><a style="color: white" href="get_app.html">Get the App</a></div>
                  </div>
              <!-- </div> -->
          </div>
          <hr>
          <div class="col-lg-3" >
              <!-- <div class="card" style="background-color: rgb(71, 70, 70); color: white"> -->
                  <div class="card-body" >
                      <h4 class="card-title mb-3"><b>Follow us</b> </h4> 
                      <p class="card-text">Connect with us and
                          stay on the loop.
                      </p>
                      <img src="image/in.png" width="40">
                      <img src="image/fb.png" width="40">
                      <img src="image/twitter.png" width="40">
                      <img src="image/google.png" width="40">
                  </div>
              <!-- </div> -->
          </div>
      </div>
    </div>
  </footer>
    
<!-- </section> -->

  <footer class="footer mt-auto py-3 " style="background-color: rgb(92, 91, 91); color: white">
    <div class="container">
      <div class="col-lg-12 mr-auto text-center">
        <img src="image/logo_new_square.png" width="50" alt="logo'">
        <span class="white-text">Copyright © Devcash 2019, Inc.</span>
      </div>
    </div>
  </footer>
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
  <script src="js_controller/register.js"></script>
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