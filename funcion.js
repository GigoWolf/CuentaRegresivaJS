mostrarFecha();

function mostrarFecha() {
    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    let f = new Date();
    $("#fecha").text(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
    let hours = f.getHours();
    let minutes = f.getMinutes();
    let seconds = f.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    $("#horaActual").text(hours + ":" + minutes + ":" + seconds);
    alert(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + " Y son las: " + hours + ":" + minutes + ":" + seconds);
}

showTime();

function showTime() {
    myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    $("#horaActual").text(hours + ":" + minutes + ":" + seconds);
    setTimeout("showTime()", 1000);
}
/////////////////////////
let countDownDate = new Date("Jan 01, 2023 00:00:01").getTime();
let myfunc = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    $("#tiemporestante").text(" Faltan " + days + " Días , " + hours + " Horas " + minutes + " Minutos y " + seconds + " Segundos para Año Nuevo ");

}, 1000);