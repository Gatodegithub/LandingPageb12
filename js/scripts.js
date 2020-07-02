let roberto = document.getElementById('roberto');
let sebastian = document.getElementById('sebastian');
let max = document.getElementById('gustavo');
let javier = document.getElementById('javier');
let robertodown = document.getElementById('roberto-down');
let sebastiandown = document.getElementById('sebastian-down');
let maxdown = document.getElementById('gustavo-down');
let javierdown = document.getElementById('javier-down');
let icono = document.getElementsByClassName('icon');

roberto.addEventListener('click', () => {
    icono[0].classList.toggle('show');
    icono[1].classList.remove('show');
    icono[2].classList.remove('show');
    icono[3].classList.remove('show');
    robertodown.classList.toggle('is-active');
    sebastiandown.classList.remove('is-active');
    maxdown.classList.remove('is-active');
    javierdown.classList.remove('is-active');
})

sebastian.addEventListener('click', () => {
    icono[0].classList.remove('show');
    icono[1].classList.toggle('show');
    icono[2].classList.remove('show');
    icono[3].classList.remove('show');
    sebastiandown.classList.toggle('is-active');
    robertodown.classList.remove('is-active');
    maxdown.classList.remove('is-active');
    javierdown.classList.remove('is-active');
})

gustavo.addEventListener('click', () => {
    icono[0].classList.remove('show');
    icono[1].classList.remove('show');
    icono[2].classList.toggle('show');
    icono[3].classList.remove('show');
    maxdown.classList.toggle('is-active');
    sebastiandown.classList.remove('is-active');
    robertodown.classList.remove('is-active');
    javierdown.classList.remove('is-active');
})

javier.addEventListener('click', () => {
    icono[0].classList.remove('show');
    icono[1].classList.remove('show');
    icono[2].classList.remove('show');
    icono[3].classList.toggle('show');
    javierdown.classList.toggle('is-active');
    sebastiandown.classList.remove('is-active');
    robertodown.classList.remove('is-active');
    maxdown.classList.remove('is-active');
})

// seteo meta
var countDownDate = new Date("July 4, 2020 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // tomo fecha de hoy
    var now = new Date().getTime();

    // recupero la diferencia
    var distance = countDownDate - now;

    // calculos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestor tiempo restante
    document.getElementById("dias").innerHTML = days;
    document.getElementById("horas").innerHTML = hours;
    document.getElementById("minutos").innerHTML = minutes;

    // Cuando pase el tiempo haces la accion
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dias").innerHTML = '0';
        document.getElementById("horas").innerHTML = '0';
        document.getElementById("minutos").innerHTML = '0';
    }
}, 1000);