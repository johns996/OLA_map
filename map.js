//* Nicholas Potyok | Start:[06/18/19]
//Legend 
//* [Titles]
//? [Design]
//TODO [Notes to myself]
//Config [properties that can altered]
//>> color coordination can be seen when using the visual studio code exstension: better comments. 

var contentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading"> Rock Tag </h1>'+
'<div id="bodyContent">'+
'<p> This is an example tag for a rock in the geo-park </p>'+
'</div>'+
'</div>';


//TODO var nativePlantPark = 
//TODO var ecoPark =


//? Rock icon
//var RockIcon = "http://maps.google.com/mapfiles/kml/paddle/blu-circle-lv.png";

function myMap(){
    var rock = new google.maps.LatLng(46.559281, -87.409145);
    var geoParkCenter = new google.maps.LatLng(46.559252, -87.409189);
    

 /*  var marker = new google.maps.Marker({
        position: rock,
        map: map,
        title: 'Rock example',
        icon: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle-lv.png'
    });
        marker.addListener('click', function() {
        infowindow.open(map, marker);
    })

    */
    
   
    //* [Default Map properties and controls]
    var mapOptions= { 
        center:new google.maps.LatLng(46.559256,-87.409183),            //Config    [(Lat, Lon) is center of map]
        zoom:17.5,                                                      //Config    [Desired zoom]
        mapTypeId: google.maps.MapTypeId.HYBRID,                        //Config    [Map type, options: (ROADMAP, SATELLITE, HYBRID, TERRAIN)]
        streetViewControl: false,                                       //Config    [False removes the streetview control icon]
        mapTypeControl: false,                                          //Config    [False removes the maptype control icon]
    };
    var mapCanvas = document.getElementById("googleMap");
    //* [Geopark circle object properties]
    var geoParkArea = new google.maps.Circle({
        center:geoParkCenter,                                           //Config    [central point of the circle]
        radius: 21,                                                     //Config    [Radius of the circle]
        strokeColor: "0000FF",                                          //Config    [border (color / opacity / thickness) values]
        strokeOpacity:0.8,                                              
        strokeWeight:2,
        fillColor:"#FF9900",                                            //Config    [fill (color / opacity) values]
        fillOpacity:0.4
    })
    
    var map = new google.maps.Map(mapCanvas, mapOptions);
    geoParkArea.setMap(map);
    marker.setMap(map);
    
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.cords,
            map: map,
            title:name,
        //  icon: props.iconImage
        });
        //Checks for custom Icon
        if(props.iconImage){
            //set icon image
            marker.setIcon(props.iconImage);
        }
        //check for content
        if(props.content){
            var InfoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            })

        }
    }
    
        addMarker({
            cords:{lat:46.559098,lng:-87.409177},
            iconImage: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle-lv.png',
            content:'<h1> another Rock </h1>'
        });
        addMarker({cords:{lat:46.559310,lng:-87.409395}});
        
    
}
//addMarker({lat: 46.559142,lng: -87.409151});

//TODO: [function for information window]
//TODO: [point tags with information bubble]
//TODO: [legend with color coordination]
//?: [have OLA area shapes only show up within a certain zoom threshold]