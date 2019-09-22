'use strict';
myFirebase.controller('EditProfilePic', function EditProfilePic($scope,$firebaseArray,$location){
var ref = firebase.database().ref().child("datadevcash/owner");
var refStorage = firebase.storage();
var pictures = $firebaseArray(ref);

var user = JSON.parse(window.localStorage.getItem('user'));
var username = user.owner_username;

var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

var ownerRef = firebase.database().ref().child("datadevcash/owner/"+id+"/business");
console.log(username);

$scope.upload = function(){

    var setProfile = pic.files[0];
    var upload = refStorage.ref("Owner/" + ( + new Date() ) + setProfile.name);

    upload.put(setProfile)
        .then( setProfile => setProfile.ref.getDownloadURL() )
        .then( url => {
            ownerRef.update({
                owner_image: url,
            });
            user.owner_image = url;
            window.localStorage.setItem("user", JSON.stringify(user));
            alert("Profile Set");
            window.location = "/2/view/owner/landing_account.php";
        });

}

$scope.back = function(){
    window.location = "/2/view/owner/landing_account.php";
}
});// end of myFirebase controller