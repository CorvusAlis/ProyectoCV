//al inicializar la pagina, el pop up no se ve
document.getElementById('popup').style.display = 'none';
document.getElementById('overlay').style.display = 'none';

//al clickear el boton "Ver mas" se muestra el pop up
document.getElementById('verMas').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

//al clickear el boton "X" se cierra el pop up
document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});