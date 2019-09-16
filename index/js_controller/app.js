'use strict';

// we need this to enable firebase since we are using angularjs + firebase.
// we tell also angular that we declare our project as 'myFirebase'.
// In your case, you can name it to 'devcash'.
var myFirebase = angular.module('myFirebase', ['firebase']);