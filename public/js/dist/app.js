





function initMap() {
  var options = {
    center: { lat: 37.0902, lng: -95.7129 },
    zoom: 5
  };

  var map = new google.maps.Map(document.getElementById('map'), options)

  console.log(options['center'])
}


// API CALLS

$('#try').on("click", function() {
var request = $.ajax({
    url: ' https://api.covidtracking.com/v1/states/info.json',
    method: "GET",
    
  });
   
  request.done(function( data ) {
    console.log(data);
  });
   
  request.fail(function( data ) {
    console.log(data)
  });

})
  