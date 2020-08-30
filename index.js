function updateMap()
 {
    // console.log("Updating map with realtime data")
    // fetch("/https://api.covid19api.com/summary")
    // Yhn p API Fetch hoti h 
    fetch("/data.json")   
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                // country=element.Country;
                // cases = element.TotalConfirmed

                cases = element.infected;
                if (cases>255){
                    color = "rgb(220, 118, 65)";
                }

                else{
                    color = `rgb(${cases}, 80, 95)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])  
                .addTo(map); 
                // .setCountry([country])
            });
        })
}

let interval = 200000;
setInterval( updateMap, interval); 