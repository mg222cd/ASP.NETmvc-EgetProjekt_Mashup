window.addEventListener("load", checkConnection, false);

//first step. check if client is connected
function checkConnection() {
    var onlineStatus = navigator.onLine;
    if (onlineStatus == true) {
        this.storeData();
    }
    else {
        //TODO
    }
}

function storeData() {
    alert('STORE DATA!');
}

