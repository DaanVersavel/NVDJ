var nvdjTijd = new Date('21 oktober 2022 20:00:00').getTime();

//update countdowntijd
function updateCountdown(){
    var nu = new Date().getTime();
    var verschil = nvdjTijd - nu;

    var d = Math.floor(verschil/1000/60/60/24);
    var h = Math.floor(verschil/1000/60/60)%24;
    var m = Math.floor(verschil/1000/60)%60;
    var s = Math.floor(verschil/1000)%60;

    document.getElementById("days" ).innerHTML =d;
    document.getElementById("hours" ).innerHTML = h<10?'0'+h:h;     //als h<10 zetteen we 0h, anders gewoon h
    document.getElementById("minutes" ).innerHTML = m<10?'0'+m:m;   //als m<10 zetteen we 0m, anders gewoon m
    document.getElementById("seconds" ).innerHTML = s<10?'0'+s:s;   //als s<10 zetteen we 0s, anders gewoon s


}
setInterval(updateCountdown,1000);
