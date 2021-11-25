const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

const nvdjTijd = new Date('21 oktober 2022 20:00:00');

//update countdowntijd
function updateCountdown(){
    const currentTijd = new Date();
    const verschil = nvdjTijd-currentTijd;

    const d = Math.floor(verschil/1000/60/60/24);
    const h = Math.floor(verschil/1000/60/60)%24;
    const m = Math.floor(verschil/1000/60)%60;
    const s = Math.floor(verschil/1000)%60;

    days.innerHTML =d;
    hours.innerHTML = h<10?'0'+h:h;     //als h<10 zetteen we 0h, anders gewoon h
    minutes.innerHTML = m<10?'0'+m:m;   //als m<10 zetteen we 0m, anders gewoon m
    seconds.innerHTML = s<10?'0'+s:s;   //als s<10 zetteen we 0s, anders gewoon s
}

setInterval(updateCountdown,1000);

updateCountdown();
