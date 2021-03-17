var page = document.documentElement;
var status = "claro";

const closeFullScreen = document.getElementById("closeFullScreen");
const theme = document.getElementById("theme");
const fullscreen = document.getElementById("fullscreen");
const btnColorToggle = document.getElementById("theme");

const timer = document.getElementById("tempo");


function inicio(){
    timer.value = "00:00:00";
    fullscreen.style.display = "block";
    closeFullScreen.style.display = "none";
    theme.style.visibility = "visible";
    btnColorToggle.style = " -moz-transform: scale(1, 1); -webkit-transform: scale(1, 1); -o-transform: scale(1, 1); -ms-transform: scale(1, 1); transform: scale(1, 1); "
}

function openFullScreen(){
    if(page.requestFullscreen){
        page.requestFullscreen();
    } 
    
    else if (elem.webkitRequestFullscreen) { /* Safari */
        page.webkitRequestFullscreen();
    } 
    
    else if (elem.msRequestFullscreen) { /* IE11 */
        page.msRequestFullscreen();
    }

    closeFullScreen.style.display = "block"; //mantem o botão de fechar o fullcreen visível, quando estiver em fullscreen.
    fullscreen.style.display = "none";
    theme.style.visibility = "hidden"; // retira o botão de inverter cores, no modo fullscreen
    
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }

    inicio();
}

function cores(){
    if (status == "claro") {
        document.body.style.backgroundColor = "#111";

        btnColorToggle.style = " -moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); -ms-transform: scale(-1, 1); transform: scale(-1, 1); "

        status = "escuro"
    } else {
        document.body.style.backgroundColor = "#1e5feb";
        btnColorToggle.style = " -moz-transform: scale(1, 1); -webkit-transform: scale(1, 1); -o-transform: scale(1, 1); -ms-transform: scale(1, 1); transform: scale(1, 1); "
        status = "claro";
    }
}

