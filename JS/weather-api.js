window.onload = oppstart;


function oppstart() {


  document.getElementById("soke-knapp").onclick = sjekk;


  function sjekk() {
    document.getElementById("temp").innerHTML = "";


    var input = document.getElementById("by-input").value;


    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&lang=NO&units=metric&APPID=2f79bff81a2e2dab56b41ffb789bbb0d",
      function(data) {
        console.log(data) //så jeg kan dobbelt sjekke grenene og vite hva jeg skal skrive ut #500iq


        var by = data.name;
        var icon = //icon linken    iconfilens navn      filtypen
          "js/apibilder/" + data.weather[0].icon + ".png";
        var temp = data.main.temp;
        var weather = data.weather[0].main;
        var luft = data.main.humidity;
        var vind = data.wind.speed;
        var beskr= data.weather[0].description

        document.getElementById("sted").innerHTML = by;
        $('.icon').attr('src', icon); // legger til "ikonet" som ble satt sammen i icon variablen
        $('.icon').attr('alt', "Illustrasjon av værsøket"); // legger til "alt tag" på vildet som blir vist frem
        document.getElementById("temp").innerHTML ="<b> Tempratur: </b>" + " " + temp + "&deg;C"; //kunne brukt Math.floor men foretrekker at den vise de 2 decimalene som hentes ut uansett
        document.getElementById("weather-typen").innerHTML = "<b> Værtype: </b>" + " " + weather + " / " + beskr;
        document.getElementById("luftfukt").innerHTML = "<b> Luftfuktighet: </b>" + luft + "%";
        document.getElementById("vindhast").innerHTML = "<b> Vind hastighet: </b>" + vind + "m/s";
      }
    );
  }
}
