const lamp = document.getElementById('lamp');
const button = document.querySelector('button');



button.addEventListener('click', () => {
    // Controllo se la lampada e' accesa o spenta
    if (lamp.classList.contains('off')) {
        // Se spenta, accendo la lampada, cambio la classe che ne indica lo stato
        lamp.classList.remove('off');
        lamp.classList.add('on');