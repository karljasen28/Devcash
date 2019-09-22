
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
    <title>Devcash Service</title>

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
                        <img src="{{profile}}" alt="Profile" />
                    </div>
                    <h4 class="name" ng-model="owner_name">{{ owner_name }}</h4>                   
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
            <header class="header-desktop2"  style="background-color: #EC4E20;">
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
                                    <div class="account-dropdown__body">
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
                    <div class="account2" ng-controller="GetUserLogin">
                    <div class="image img-cir img-120">
                        <img src="{{profile}}" alt="Profile" />
                    </div>
                    <h4 class="name" ng-model="owner_name">{{ owner_name }}</h4>                   
                </div>
                    <nav class="navbar-sidebar">
                        <ul class="list-unstyled navbar__list">
                            <li class="has-sub">
                                <a href="landing_dashboard.php">
                                    <i class="fas fa-tachometer-alt"></i>Dashboard
                                </a>
                            </li>
                            <li class="active has-sub">
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
                                <div class="overview-wrap">
                                    <h2 class="title-1">Service List</h2>
                                    <a href="add_service.php"><button class="btn" style="background-color: #ec4e20;color: white;">Create Service</button></a>
                                </div>
                            </div>
                        </div><br>
                        <div class="row">
                        <div class="container">
                        <div class="table-responsive" ng-controller="GetService">
                        <div class="form-group">
                    <div class="input-group margin-bottom-sm">                  
                       <input type="text" ng-model="search" id="search" class="form-control col-sm-3" placeholder="Search..."><span class="input-group-addon"><i class="fa fa-search"></i></span>

                            <!-- <label class="control-label" for="sortby" style="margin-left: 20px;">Sort By: </label> 
                            <select class="form-control col-sm-2" id="sortby" style="margin-left: 5px;" ng-model="sortby">
                                <option>No Category</option>
                                <option ng-repeat="serv in services">{{serv.category.category_name}}</option>
                            </select> -->
                    </div>
                    </div>  
                            <table st-table="services" class="table table-light table-hover dt-responsive">
                                <thead style="background-color: #F39C12;color: #fefefe;"> 
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Discount</th>
                                        <!-- <th>Category</th> -->
                                        <th>Price</th>
                                        <th>Disc. Price</th>
                                        <th>QR Code</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr ng-repeat="serv in services.slice().reverse() | filter:search | filter:sortby">
                                        <td><img src="{{serv.service_image}}" width="80" class="image img-cir"></td>
                                        <td>{{serv.service_name}}</td>
                                        <td>{{serv.service_status}}</td>
                                        <td>{{serv.discount.disc_value}}</td>
                                        <!-- <td>{{serv.category.category_name}}</td> -->
                                        <td> ₱ {{serv.service_price}}</td>
                                        <td> ₱ {{serv.discounted_price}}</td>
                                        <td><a href="qr_service.php?id={{serv.id}}">View</a></td>
                                        <td>
                                            <a href="edit_service.php?id={{serv.id}}" class="btn btn-primary">Edit</a>
                                            <button class="btn btn-danger" ng-click="removeService(serv)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                        </div>
                        </div>    
                        </div>
                    </div>
                </div>
            </div><!-- END OF MAIN CONTENT -->
            
        </div><!-- END PAGE CONTAINER-->

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
    <script src="js_controller/getservice.js"></script>
</body>
</html>
<!-- end document-->