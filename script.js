//Cambai de color el fondo al ahcer click en un boton 
function cambiarColor(){
    document.body.style.backgroundColor ="lightblue";
}

//mostrar mensaje de bienvenoda cada que carge la pagina 
window.onload = function(){
    alert("Bienvenido a mi pagina interactiva");
}

//mostarar la hora y la fecha actual

function mostararfecha(){
    let fecha = new Date();
    alert("fecha y hora actual: " + fecha.toLocaleString());
}