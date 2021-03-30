
/* 
Aca deje un poquito del ejemplo del for 
var multiplicar
for (let i = 0; i < 11; i++) {
    console.log(i*5);
    }
*/
    var nombredelamadre = prompt("¿Como se llama tu madre?");
    alert ("El nombre de tu madre es " + nombredelamadre);
    let ok = prompt("Hola, escribi 1 para confirmar o una letra para regresar");

    while (ok = "1") {
    nombredelamadre = prompt ("¿Como se llama tu madre?");
    alert ("El nombre de tu madre es " + nombredelamadre);
    ok = prompt ("Hola, escribi 1 para confirmar o una letra para regresar");
    }