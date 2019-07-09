// Nicholas Potyok | Start:[06/18/19]                               -->
//Comment Color Legend                                              -->
//* [Title]                                                         -->
//? [Explanation]                                                   -->
//TODO [Notes]                                                      -->
//Config [properties to alter]                                      -->
//>> View comment colors with VS code exstension: 'better comments' -->


function initMap(){
//* [Map properties]
      var mapOptions= { 
        center:new google.maps.LatLng(46.559256,-87.409183),            //Config    [(Lat, Lon) is center of map]
        zoom:17.5,                                                      //Config    [Desired zoom]
        mapTypeId: google.maps.MapTypeId.HYBRID,                        //Config    [Map type, options: (ROADMAP, SATELLITE, HYBRID, TERRAIN)]
        streetViewControl: false,                                       //Config    [False removes the streetview control icon]
        mapTypeControl: false,                                          //Config    [False removes the maptype control icon]
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);      //? [creates new map]
//* icons
var icons = {
    Rock: {    
        name: 'Rock',
        icon: 'icons/Rockicon.png'
    },
    Plant: {    
        name: 'Plant',
        icon: 'icons/plantIcon.png'
    },
    Tree: {    
        name: 'Tree',
        icon: 'icons/Treeicon.png'
    },
    Shrub: {    
        name: 'Shrub',
        icon: 'icons/Shrubicon.png'
    },
    Grass: {    
        name: 'Grass',
        icon: 'icons/Grassicon.png'
    }
};
//* [Geopark overlay properties]
    var geoParkCenter = new google.maps.LatLng(46.559252, -87.409189);
    var geoParkArea = new google.maps.Circle({
        center:geoParkCenter,                                           //Config    [central point of the circle]
        radius: 21,                                                     //Config    [Radius of the circle]
        strokeColor: "0000FF",                                          //Config    [border (color / opacity / thickness) values]
        strokeOpacity:0.8,                                              
        strokeWeight:2,
        fillColor:"#9b45f7",                                            //Config    [fill (color / opacity) values]
        fillOpacity:0.4
    });
            var npp = [
                new google.maps.LatLng(46.559709, -87.408870),
                new google.maps.LatLng(46.559884, -87.409068),
                new google.maps.LatLng(46.560189, -87.409216),
                new google.maps.LatLng(46.560458, -87.408485),
                new google.maps.LatLng(46.560271, -87.408222),
                new google.maps.LatLng(46.560128, -87.407862)
            ]
//* [NativePlantPark overlay properties]
    var nativePlantPark = new google.maps.Polygon({ 
        path:npp,
        strokeColor: "0000FF",                                          //Config    [border (color / opacity / thickness) values]
        strokeOpacity:0.8,                                              
        strokeWeight:2,
        fillColor:"#f2f745",                                            //Config    [fill (color / opacity) values]
        fillOpacity:0.4
    });
            var ecoPark = [
                new google.maps.LatLng(46.558527, -87.409090),
                new google.maps.LatLng(46.558137, -87.409969),
                new google.maps.LatLng(46.558254, -87.410294),
                new google.maps.LatLng(46.558326, -87.410985),
                new google.maps.LatLng(46.559209, -87.410991),
                new google.maps.LatLng(46.559179, -87.410283),
                new google.maps.LatLng(46.558702, -87.410304),
                new google.maps.LatLng(46.558734, -87.409294),
            ]
//* [Ecopark overlay properties]
    var ecoPark = new google.maps.Polygon({ 
        path:ecoPark,
        strokeColor: "0000FF",                                          //Config    [border (color / opacity / thickness) values]
        strokeOpacity:0.8,                                              
        strokeWeight:2,
        fillColor:"#FF9900",                                            //Config    [fill (color / opacity) values]
        fillOpacity:0.4
    });
        geoParkArea.setMap(map);
        ecoPark.setMap(map);
        nativePlantPark.setMap(map);
//* [Array that holds all the markers]
    var markers = [                                                     //Config    [add new markers to this array]
        {
            cords:{lat:46.559098,lng:-87.409177},
            iconImage: 'icons/Treeicon.png',
            content:'<h1> This is a Tree </h1>'
        },
        {
            cords:{lat:46.559310,lng:-87.409395},
            iconImage: 'icons/Rockicon.png',
            content:'<h1> This is a Rock </h1>'
        },
        {
            cords:{lat:46.560134,lng:-87.408707},
            iconImage: 'icons/plantIcon.png',
            content:'<h1> This is a Plant </h1>'
        },
        {
            cords:{lat:46.558544,lng:-87.409713},
            iconImage: 'icons/Shrubicon.png',
            content:'<h1> This is a Shrub </h1>'
        },
        {
            cords:{lat:46.560047,lng:-87.408422},
            iconImage: 'icons/Grassicon.png',
            content:'<h1> This is Grass </h1>'
        }
    ];

    for(var i = 0;i < markers.length;i++){                              //? Loops through the array and calls addMarker() for each index
        addMarker(markers[i]);
      }

    function addMarker(props){                                          //? Function to create markers
        var marker = new google.maps.Marker({
            position: props.cords,
            map: map
        });
        //Checks for definition of custom icon
        if(props.iconImage){
            //set icon image
            marker.setIcon(props.iconImage);
        } 
        //check for info
        if(props.content){
           var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
            marker.addListener('click', function(){
             //   infoWindow.setContent(marker.info),
                infoWindow.open(map, marker);
            });
        }
    }
//* Legend Content
var legend = document.getElementById('legend');
for (var key in icons) {
  var type = icons[key];
  var name = type.name;
  var icon = type.icon;
  var div = document.createElement('div');
  div.innerHTML = '<img src="' + icon + '"> ' + name;
  legend.appendChild(div);
}

    map.controls[google.maps.ControlPosition.LEFT_TOP].push(document.getElementById('legend'));

}

//TODO: [function for information window content]
//TODO: [Scale icon size to the level of zoom]
//TODO: [place if statement to close info window when another is open]
//TODO: [Remove all of the native google icons on the map]
//TODO: [have OLA area shapes only show up within a certain zoom threshold]
//TODO: [Create a custom map style]