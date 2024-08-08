const abrirPopup = document.getElementById('abrir-popup');
const popup = document.getElementById('popup');
const cerrarPopup = document.querySelector('.cerrar');

abrirPopup.addEventListener('click', () => {
    popup.classList.remove('oculto');
});

cerrarPopup.addEventListener('click', () => {
    popup.classList.add('oculto');
});