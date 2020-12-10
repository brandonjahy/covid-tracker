





function initMap() {
  var options = {
    center: { lat: 37.0902, lng: -95.7129 },
    zoom: 5
  };

  var map = new google.maps.Map(document.getElementById('map'), options)

  console.log(options['center'])
}


// API CALLS

$('#container').ready(function() {
var request = $.ajax({
    url: ' https://api.covidtracking.com/v1/states/info.json',
    method: "GET",
    
  });
   
  request.done(function( data ) {


    let name = data[0].name;
    // data.forEach(function(value){
    //     value = data[value]
    //     console.log(value)
    // });

    for(i = 0; i < data.length; i++) {
        var select = document.querySelector('.select1')
        select.options[select.options.length] = new Option(data[i].name)
        console.log(data[i].name)
    }

    console.log(name)
    console.log(data);
  });
   
  request.fail(function( data ) {
    console.log(data)
  });

})
  