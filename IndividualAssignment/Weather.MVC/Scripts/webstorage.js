﻿window.addEventListener("load", checkConnection, false);

//first step. check if client is connected
function checkConnection() {
    var onlineStatus = navigator.onLine;
    if (onlineStatus == true) {
        this.storeData();
    }
    else {
        this.offlineFunction();
    }
}

function offlineFunction() {
}

function storeData() {
    /*
    //H3 Mainheader
    var forecastHeader = document.getElementById("forecastHeader");
    //Statustext
    var forecastUpdated = document.getElementById("forecastUpdated");
    //Forecast headers (weekdays)
    var table = document.getElementsByTagName("td");
    console.log(table[0].innerHTML);
    for (var i = 0; i < table.length; i++) {
        //
    }
    */
}

/*
// Hämtar ut innehållet i local storage variabeln 
var storedData = localStorage.getItem("searches");
var storedSearch = JSON.parse(storedData);

// Om det finns något i variabeln...
if (storedSearch != null) {

    // Om sökningen redan finns i arrayen tas den gamla bort
    if ($.inArray(search, storedSearch) !== -1) {
        storedSearch.splice($.inArray(search, storedSearch), 1);
    }
    // Tar bort den äldsta sökningen om det finns fler än 10 element
    if (storedSearch.length > 10) {
        storedSearch.shift();
    }

    // Lägger till sökningen i strängen
    storedSearch.push(search);
    localStorage['searches'] = JSON.stringify(storedSearch);
}
    // ...annars skapas en helt ny array som prognoserna läggs till i.
else {
    var newArray = [];
    newArray.push(search);
    localStorage['searches'] = JSON.stringify(newArray);
}
*/

