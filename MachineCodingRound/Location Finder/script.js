const showLoc = document.getElementById("show-location");
const getLoc = document.querySelector(".btn");
const info = document.querySelector(".info");

getLoc.addEventListener("click", locationHandler);

function locationHandler() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        showLoc.innerHTML += `<br>Latitude: ${latitude}<br>Longitude: ${longitude}`;
        showLoc.style.display = "block";
        info.style.display = "none";
      },
      function (error) {
        console.log(error);
        info.removeChild(info.firstChild);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            info.innerHTML = "<h3>You denied the request for Geolocation.</h3>";
            break;
          case error.POSITION_UNAVAILABLE:
            info.innerHTML = "<h3>Location information is unavailable.</h3>";
            break;
          case error.TIMEOUT:
            info.innerHTML = "<h3>The request to get location timed out.</h3>";
            break;
          case error.UNKNOWN_ERROR:
            info.innerHTML = "<h3>An unknown error occurred.</h3>";
            break;
        }
      }
    );
  }
}
