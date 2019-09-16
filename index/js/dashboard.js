var d = new Date();
let message;
document.getElementById("dateGMT").innerHTML = d;
let wazeId = document.getElementById('wazeId');

navigator.geolocation.getCurrentPosition(showPosition, showError);
function showPosition(position) {

    let link = 'https://embed.waze.com/iframe?zoom=14&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&pin=1&desc=1'
    // console.log(link);
    wazeId.setAttribute("src",link);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            message = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            message = "An unknown error occurred."
            break;
    }
    Swal.fire(
            message,
            'error'
        );
}