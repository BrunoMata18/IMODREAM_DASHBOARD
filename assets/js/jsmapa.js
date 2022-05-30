var map
function initMap(lat,long) {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 38.71196425733478, lng:-9.21110677356596 },
    });
    console.log(lat,long)
    $.ajax({
        url: "https://imodream-api.herokuapp.com/api/proprety",
        type: "GET",
        dataType: 'json',
        success: function(result) {
            //console.log(result);
            $('#DimensionPro').text(result)
            var down = document.getElementById("map");
            //console.log(obj);

            var res = [""];
            var marker
            const infowindow = new google.maps.InfoWindow()

            for (var i = 0; i < result.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(result[i].location.coordinates[0], result[i].location.coordinates[1]),
                    map: map
                });

                marker.setIcon('../assets/img/Imo/houseicon.png')
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent("Rua: " + result[i].StreetName + "<br>Preço: " + result[i].Price  + "<br>Tipo de Propriedade: "+  result[i].PropretyType + "<br>Medidas: "+  result[i].Measurments +" - "+ result[i].Dimension);

                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }


        }


    })
    getLocation();

}
async function getLocation(){
    const api_url='https://imodream-api.herokuapp.com/api/area'
    const response=await fetch(api_url);
    const area=await response.json();
    var infowindowArea= new google.maps.InfoWindow()
    console.log(area)
    var polygon = [];
    var bounds = [];
    var latLngArray = [];
    for (let i = 0; i < area.length; i++) {
        var ParseArea = (area[i].Location.coordinates)

        console.log(ParseArea.coordinates)

        bounds[i] = new google.maps.LatLngBounds();

        var shell = ParseArea[0];

        latLngArray[i] = [];


        for (let s = 0; s < shell.length; s++) {
            var pt = new google.maps.LatLng(shell[s][0], shell[s][1]);
            bounds[i].extend(pt);
            latLngArray[i].push(pt);

        }



        console.log(latLngArray);
        // Polygon construction.

        polygon[i] = new google.maps.Polygon({
            paths: latLngArray[i],
            strokeColor:'#FF0000',
            strokeOpacity: 0.2,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.2
        });
        polygon[i].setMap(map);

        google.maps.event.addListener(polygon[i], 'click', function(event) {

            infowindowArea.setContent("Zona: " + area[i].AreaName);
            infowindowArea.setPosition(event.latLng);
            infowindowArea.open(map);
            map.fitBounds(bounds[i]);
        });
    }


}

window.initMap = initMap;





