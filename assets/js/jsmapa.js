function initMap(lat,long) {

    const map = new google.maps.Map(document.getElementById("map"), {
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


}


window.initMap = initMap;


//);