<!DOCTYPE html>
<html lang="en" ng-app="myFirebase">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <title>Devcash Product</title>

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
</head>

<body class="animsition">
    <div class="page-wrapper">
        <!-- MENU SIDEBAR-->
        <aside class="menu-sidebar">
            <div class="logo">
                <a href="#">
                    <img src="images/logo_new_rectangle.png" alt="Devcash" />
                </a>
            </div>
            <div class="menu-sidebar2__content js-scrollbar1">
                <div class="account2" ng-controller="GetUserLogin">
                    <div class="image img-cir img-120">
                        <img src="images/icon/avatar-big-01.jpg" alt="John Doe" />
                    </div>
                    <h4 class="name" ng-model="owner_name">{{owner_name}}</h4>
                    
                </div>
                <nav class="navbar-sidebar2">
                    <ul class="list-unstyled navbar__list">
                        <li class="has-sub">
                            <a href="landing_dashboard.php">
                                <i class="fas fa-tachometer-alt"></i>Dashboard
                            </a>
                        </li>
                        <li class="has-sub">
                            <a href="landing_employee.php">
                                <i class="fas fa-users"></i>Employee</a>
                        </li>
                        <li class="active has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-archive"></i>Inventory
                                <span class="arrow">
                                    <i class="fas fa-angle-down"></i>
                                </span>
                            </a>
                            <ul class="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="landing_service.php">
                                        <i class="fas fa-table"></i>Service</a>
                                </li>
                                <li>
                                    <a href="landing_product.php">
                                        <i class="far fa-check-square"></i>Product</a>
                                </li>
                                <li>
                                    <a href="landing_discount.php">
                                        <i class="fas fa-calendar-alt"></i>Discount</a>
                                </li>
                                <li>
                                    <a href="landing_qrcode.php">
                                        <i class="fas fa-qrcode"></i>QR Code</a>
                                </li>
                            </ul>
                        </li>
                        <li class="has-sub">
                            <a href="landing_category.php">
                                <i class="fas fa-copy"></i>Category
                            </a>
                        </li>
                        <li class="has-sub">
                            <a href="landing_report.php">
                                <i class="fas fa-desktop"></i>Reports
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <!-- END MENU SIDEBAR-->

        <!-- PAGE CONTAINER-->
        <div class="page-container2">
            <!-- HEADER DESKTOP-->
            <header class="header-desktop2" style="background-color: #EC4E20;">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="header-wrap2">
                            <div class="logo d-block d-lg-none">
                                <a href="#">
                                    <img src="images/logo_new_rectangle.png" alt="Devcash" width="180" />
                                </a>
                            </div>
                            <div class="header-button2">
                                <div class="header-button-item js-item-menu">
                                    <i class="zmdi zmdi-search"></i>
                                    <div class="search-dropdown js-dropdown">
                                        <form action="">
                                            <input class="au-input au-input--full au-input--h65" type="text" placeholder="Search for datas &amp; reports..." />
                                            <span class="search-dropdown__icon">
                                                <i class="zmdi zmdi-search"></i>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                                <div class="header-button-item has-noti js-item-menu">
                                    <i class="zmdi zmdi-notifications"></i>
                                    <div class="notifi-dropdown js-dropdown">
                                        <div class="notifi__title">
                                            <p>You have 3 Notifications</p>
                                        </div>
                                        <div class="notifi__item">
                                            <div class="bg-c1 img-cir img-40">
                                                <i class="zmdi zmdi-email-open"></i>
                                            </div>
                                            <div class="content">
                                                <p>You got a email notification</p>
                                                <span class="date">April 12, 2018 06:50</span>
                                            </div>
                                        </div>
                                        <div class="notifi__item">
                                            <div class="bg-c2 img-cir img-40">
                                                <i class="zmdi zmdi-account-box"></i>
                                            </div>
                                            <div class="content">
                                                <p>Your account has been blocked</p>
                                                <span class="date">April 12, 2018 06:50</span>
                                            </div>
                                        </div>
                                        <div class="notifi__item">
                                            <div class="bg-c3 img-cir img-40">
                                                <i class="zmdi zmdi-file-text"></i>
                                            </div>
                                            <div class="content">
                                                <p>You got a new file</p>
                                                <span class="date">April 12, 2018 06:50</span>
                                            </div>
                                        </div>
                                        <div class="notifi__footer">
                                            <a href="#">All notifications</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-button-item mr-0 js-sidebar-btn">
                                    <i class="zmdi zmdi-menu"></i>
                                </div>
                                <div class="setting-menu js-right-sidebar d-none d-lg-block">
                                    <div class="account-dropdown__body">
                                        <div class="account-dropdown__item">
                                            <a href="landing_account.php">
                                                <i class="zmdi zmdi-account"></i>Account</a>
                                        </div>
                                        <div class="account-dropdown__item">
                                            <a href="#">
                                                <i class="zmdi zmdi-money-box"></i>Subscription</a>
                                        </div>
                                        <div class="account-dropdown__item">
                                            <a href="#">
                                                <i class="zmdi zmdi-notifications"></i>Notifications</a>
                                        </div>
                                        <div class="account-dropdown__item">
                                            <a href="#">
                                                <i class="zmdi zmdi-settings"></i>Setting</a>
                                        </div>
                                    </div>
                                    <div class="account-dropdown__body" ng-controller="logout">
                                        <div class="account-dropdown__item">
                                            <a href="#">
                                                <i class="zmdi zmdi-settings"></i>Help Center</a>
                                        </div>
                                        <div class="account-dropdown__item" ng-controller="logout">
                                        <form ng-submit="logout()">
                                            <a href="#">    
                                            <button type="submit" name="logout">
                                                <i class="fas fa-sign-out-alt"></i>Logout</button>
                                            </a>    
                                        </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <aside class="menu-sidebar2 js-right-sidebar d-block d-lg-none">
                <div class="logo">
                    <a href="#">
                        <img src="images/logo_new_rectangle.png" alt="Devcash" />
                    </a>
                </div>
                <div class="menu-sidebar2__content js-scrollbar2">
                    <div class="account2">
                        <div class="image img-cir img-120">
                            <img src="images/icon/avatar-big-01.jpg" alt="John Doe" />
                        </div>
                        <h4 class="name">john doe</h4>
                        <a href="#">Sign out</a>
                    </div>
                    <nav class="navbar-sidebar">
                        <ul class="list-unstyled navbar__list">
                            <li class="has-sub">
                                <a href="landing_dashboard.php">
                                    <i class="fas fa-tachometer-alt"></i>Dashboard
                                </a>
                            </li>
                            <li class="has-sub">
                                <a href="landing_employee.php">
                                    <i class="fas fa-users"></i>Employee</a>
                            </li>
                            <li class="active has-sub">
                                <a class="js-arrow" href="#">
                                    <i class="fas fa-archive"></i>Inventory
                                    <span class="arrow">
                                        <i class="fas fa-angle-down"></i>
                                    </span>
                                </a>
                                <ul class="list-unstyled navbar__sub-list js-sub-list">
                                    <li>
                                        <a href="landing_service.php">
                                            <i class="fas fa-table"></i>Service</a>
                                    </li>
                                    <li>
                                        <a href="landing_product.php">
                                            <i class="far fa-check-square"></i>Product</a>
                                    </li>
                                    <li>
                                        <a href="landing_discount.php">
                                            <i class="fas fa-calendar-alt"></i>Discount</a>
                                    </li>
                                    <li>
                                        <a href="landing_qrcode.php">
                                            <i class="fas fa-qrcode"></i>QR Code</a>
                                    </li>    
                                </ul>
                            </li>
                            <li class="has-sub">
                                <a href="landing_category.php">
                                    <i class="fas fa-copy"></i>Category
                                </a>
                            </li>
                            <li class="has-sub">
                                <a href="landing_report.php">
                                    <i class="fas fa-desktop"></i>Reports
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <!-- END HEADER DESKTOP-->

          <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="overview-wrap" style="border-bottom: 3px solid #ec4e20;">
                                    <h3 class="title-1">Product Info</h3>
                                </div>
                            </div>
                        </div><!-- END OF ROW --><br>
                        <div class="row">
                            <div class="container">
                                <div ng-controller="FormController">
                                <form class="form-horizontal" ng-submit="addProduct()">
                                    <!-- <div>
                                        <span><strong class="alert alert-warning">{{message}}</strong></span>
                                    </div> -->
                                    <div class="form-group">
                                        <img src="images/fa fa-user-circle.png" id="img-output" width="100">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Upload Image</label>
                                            <input class="form-control col-sm-4" type="file" name="emp_img" onchange="loadfile(event)">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Product Name</label>
                                            <input class="form-control col-sm-5" type="text" name="prod_name" ng-model="prod_name">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Product Brand</label>
                                            <input class="form-control col-sm-5" type="text" name="prod_brand" ng-model="prod_brand">
                                    </div>      

                                    <div class="form-group">
                                        <label class="control-label" ng-model="prod_cat">Category</label>
                                            <select class="form-control  col-sm-5" name="prod_cat" ng-model="prod_cat">
                                                <option value="No Category">No Category</option>
                                                <option ng-repeat="data in categories">{{data.category_name}}</option>
                                            </select>
                                    </div>        

                                    <div class="form-group">
                                        <label class="control-label">Unit of Measure</label>
                                            <select name="" class="form-control col-sm-5" ng-model="prod_unit">
                                                <option disabled selected hidden>Select Unit</option>
                                                <option value="pieces">Pieces</option>
                                                <option value="kilogram">Kilogram</option>
                                            </select>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Unit Quantity</label>
                                            <input class="form-control col-sm-5" type="number" min="1" name="prod_qty" ng-model="prod_qty">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Expiration Date</label>
                                            <input class="form-control col-sm-5" type="date" ng-model="prod_exp_date">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Price</label>
                                            <input class="form-control col-sm-5" type="number" step="0.01" name="prod_price" ng-model="prod_price">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">ROP</label>
                                            <input class="form-control col-sm-5" type="number" step="0.01" name="prod_rop" ng-model="prod_rop">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Discount Value</label>
                                            <select name="prod_disc" class="form-control col-sm-5" ng-model="prod_disc">
                                                <option ng-value=0>No Discount</option>
                                                <option ng-repeat="data in discounts">{{data.disc_value}}</option>
                                            </select>
                                    </div>   
                                    <br>
                                    <div class="form-group">
                                        <button class="btn col-sm-2" name="add" type="submit" style="background-color: #ec4e20;color: white;">Save</button>
                                        <a class="btn btn-danger col-sm-2" href="landing_product.php">Cancel</a>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- END OF MAIN CONTENT -->

    <!-- DO NOT ERASE -->    
    </div>
</div>

        

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
    <script>
        $('.mydatatable').DataTable();
    </script>
    <script>
        var loadfile = function(event){
            var image = document.getElementById('img-output');
            image.src = URL.createObjectURL(event.target.files[0]);
        }
    </script>
   

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
        </script>
    <script src="js_controller/app.js"></script>
    <script src="js_controller/getuserlogin.js"></script>
    <script src="js_controller/logout.js"></script>
    <script src="js_controller/add_product.js"></script>
</body>
</html>
<!-- end document-->