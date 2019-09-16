'use strict';

myFirebase.controller('EditProfilePic', function EditProfilePic($scope, $firebaseArray, $firebaseStorage) {
	var refStorage = firebase.storage().ref().child('images');
	console.log(refStorage);
	$scope.fileStorage = $firebaseStorage(refStorage);

	$scope.editProfilePic = function() {
	console.log($scope.profile);
	var imageFile = $scope.profile;
	refStorage.child(images).put(profile);
    refStorage.on('state_changed', function(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            }, function() {
                //handle error
            }, function() {
           //url of storage file 
                var downloadURL = storageRef.snapshot.downloadURL;
                console.log(downloadURL)
                //you will get url of snapshot
            });
	}

	$scope.back = function{
		window.location = "/2/view/owner/landing_account.php";
	}
});