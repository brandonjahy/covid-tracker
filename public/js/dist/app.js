





function initMap() {
  var options = {
    center: { lat: 37.0902, lng: -95.7129 },
    zoom: 5
  };

  var map = new google.maps.Map(document.getElementById('map'), options)

  console.log(options['center'])
}

    const option = document.querySelectorAll("option");
    var select;
    var newOption;
    var newOps;
    var newOne = document.getElementsByClassName('.newOne');
    var stateName;
    var idVal;


// API CALLS




$('#container').ready(function() {
    var request = $.ajax({
        url: 'https://api.covidtracking.com/v1/us/current.json',
        method: "GET",
        
      });
       
      request.done(function( data ) {

        $('.TP').text(data[0].positive)
        $('.TN').text(data[0].negative)
        $('.CH').text(data[0].hospitalizedCurrently)
        $('.death').text(data[0].death)
    
        console.log(data[0].positive);
        console.log(data[0].negative);
        console.log(data[0].hospitalizedCurrently);
        console.log(data[0].death);
      });
       
      request.fail(function( data ) {
        console.log(data)
      });
    
    })

    function stateEvent(){
    
        var request = $.ajax({
            url: '//api.covidtracking.com/v1/states/current.json',
            method: "GET",
        });
        
        request.done(function( data ) {
            for(i = 0; i < data.length; i++) {
                stateName = data[i].state
            }
        });
        
        request.fail(function( data ) {
            console.log(data)
        });
        
}

$(function () {

  $("#select1").on('change', function(){
    opVal = $(this).children("option:selected").val();
    console.log(opVal)
    stateEvent()
    if(opVal === stateName) {
      console.log(stateName)
    } else {
      console.log("failed")
    }
  })


})

  
// $(function (e) {


//     select = document.querySelector('#select1')
//     // newOps = money('.select1').getElementsByTagName('option')

//     // $('#select1').on("click",function(){
//     //   opVal = $(this).val()
//     // var request = $.ajax({
//     //     url: ' https://api.covidtracking.com/v1/states/info.json',
//     //     method: "GET",
//     // });
    
//     // request.done(function( data ) {
//     //     for(i = 0; i < data.length; i++) {
//     //         newOption = select.options[select.options.length] = new Option(data[i].name);
//     //         // newOption.classList.add('newOne')
//     //         idVal = data[i].state;
//     //     }
//     //     idVal = data.data[i].state;
//     //     console.log(opVal)
//     //     stateVal = stateEvent();
//     //     if (idVal === stateName) {
//     //       console.log(stateName)
//     //     } else {
//     //       console.log("failed")
//     //     }
//     // });
    
//     // request.fail(function( data ) {
//     //     console.log(data)
//     // });

//     // })

   
