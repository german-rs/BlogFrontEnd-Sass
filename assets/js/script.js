/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Blog FrontEnd con Sass.
    Enlace del repositorio: https://github.com/german-rs/BlogFrontEnd-Sass
*/

function sendToDetail() {
    window.location.href = './detalle.html';
}
document.querySelector('.new__article').addEventListener('click', sendToDetail);

function sendHome(){
    window.location.href = './index.html';
}

function sendToLogin(){
    window.location.href = './login.html';
}

function sendToGmail(){
    window.location.href = 'https://www.google.com/intl/es/gmail/about/';
}