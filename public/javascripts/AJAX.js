function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "other/ajax_info.txt", false);
    xhttp.send();
    document.getElementById("taken").innerHTML = xhttp.responseText;
}