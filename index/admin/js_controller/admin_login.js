'user strict';

myFirebase.controller('FormController', function FormController($scope, $location, $firebaseArray, $firebaseObject){
var ref = firebase.database().ref().child("datadevcash/admin");

$scope.login = function() {
	var username = $scope.username;
	var password = $scope.password;

ref.orderByChild('account/admin_username')
	.startAt(username)
	.endAt(username)
	.on('value', function(snap){
		console.log(snap.val());
		if(snap.val() !== null){
			snap.forEach(function(data) {
				angular.forEach(data.val(), function(shot) {
						console.log(shot.admin_username);
					if(shot.admin_username === username && shot.admin_password === password) {
						window.localStorage.setItem("admin_key", JSON.stringify(data.key));
						window.localStorage.setItem("admin", JSON.stringify(data.val().account));
						window.localStorage.setItem("isLoggedIn", true);
						window.location = "/2/view/admin/admin_dashboard.php";
					}
					else {
						window.alert("Incorrect username or password");
					}
				});
			});
		}
		else{
			alert("Invalid account");
		}
	});
}
});