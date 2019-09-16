'use strict';

myFirebase.controller('logout', function logout($scope, $location, $firebaseArray, $firebaseObject){
	
	$scope.logout = function()
	{
		window.localStorage.removeItem("isLoggedIn");
		window.localStorage.removeItem("user");
		window.localStorage.removeItem("owner_key");
		window.localStorage.removeItem("accountItem");
		window.localStorage.removeItem("accountKey");
		
		window.location = "/2/index/index.php";
	}

});