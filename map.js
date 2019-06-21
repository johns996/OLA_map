//* Nicholas Potyok | Start:[06/18/19]
//Legend 
//* [Titles]
//? [Design ideas]
//TODO [Notes to myself]
//Config [properties that can altered]
//>> color coordination can be seen when using the visual studio code exstension: better comments. 

function myMap(){
    var GeoParkCenter = new google.maps.LatLng(46.559252, -87.409189)
    var mapCanvas= document.getElementById("googleMap");
    //* [Map properties and controls]
    var mapOptions= { 
        center:new google.maps.LatLng(46.559256,-87.409183),            //Config    [(Lat, Lon) is center of map]
        zoom:18.1,                                                      //Config    [Desired zoom]
        mapTypeId: google.maps.MapTypeId.HYBRID,                        //Config    [Map type, options: (ROADMAP, SATELLITE, HYBRID, TERRAIN)]
        streetViewControl: false,                                       //Config    [False removes the streetview control icon]
        mapTypeControl: false,                                          //Config    [False removes the maptype control icon]
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    //* [Geopark circle object properties]
    var flightPath = new google.maps.Circle({
        center:GeoParkCenter,                                           //Config    [central point of the circle]
        radius: 21,                                                     //Config    [Radius of the circle]
        strokeColor: "0000FF",                                          //Config    [border (color / opacity / thickness) values]
        strokeOpacity:0.8,                                              
        strokeWeight:2,
        fillColor:"#FF9900",                                            //Config    [fill (color / opacity) values]
        fillOpacity:0.4
    })
    flightPath.setMap(map);
    
}


//TODO: [function for information window]
//TODO: [point tags with information bubble]
//TODO: [legend with color coordination]
//?: [have OLA area shapes only show up within a certain zoom threshold]