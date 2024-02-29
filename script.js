function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
let penger = 0;
// vask 
let vask = 300;
let planTing =200;


//maling 
let finSkrift = 500;

function oppdaterPenger() {
    document.getElementById('penger').innerText = 'Du har: ' + penger + 'kr' + ' på kontoen';
}




