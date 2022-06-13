// Take User Input "Zip Code" and use https://www.zippopotam.us/ API to fetch relavent data
function getZipData(){

    //Prevent Page Auto-Refresh on Sumbit
    event.preventDefault();

    //Grab User ZipCode Input
    userInputZip = document.getElementById('zipInput').value;
    console.log(userInputZip);

    // Check User Input Validity - Is a 5-digit number
    if(isNaN(userInputZip) || userInputZip.length !== 5){
        alert("Incorrect Zipcode format. Try #####.");
    } else{
        //GET Request to API (per API sample)
        var client = new XMLHttpRequest();
        client.open("GET", "http://api.zippopotam.us/us/" + userInputZip, true);
        client.onreadystatechange = function() {
            if(client.readyState == 4) {
                // alert(client.responseText);
                console.log(this.responseText);
                //Send API data to Front-End
                document.getElementById('state').value = JSON.parse(client.responseText).places[0].state //State
                document.getElementById('city').value = JSON.parse(client.responseText).places[0]["place name"] //City

                //State Image - from State Abbrevaiton
                document.getElementById('stateAbrv').src = "states/" + JSON.parse(client.responseText).places[0]["state abbreviation"] + ".svg"
            };
        };

        client.send();

    }
    
};

