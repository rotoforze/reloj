window.onload = inicio;
function inicio(){
    refrescar = setInterval(ref, 1000) //Llamamos a "ref" cada segundo
    document.getElementById("boton").addEventListener("click", sw); //Añadimos un EventListener para llamar a la función que cambiará el color de la página
    document.querySelector("a").addEventListener("mouseenter", twitterenter); //Añadimos un EventListener para llamar a la función twitterenter 
    document.querySelector("a").addEventListener("mouseleave", twitterleave); //Añadimos un EventListener para llamar a la función twitterleave 
    document.getElementById("boton").addEventListener("click", animacion);
    document.getElementById("fecha").innerHTML = ("00"+"/"+"00"+"/"+"00"); //Escribimos en el html un valor por defecto para que no haga popIN
    document.getElementById("hora").innerHTML = ("00"+":"+"00"+":"+"00"); // "
};
function ref(){
const date = new Date(); //Creamos una constante que nos devuelva la fecha completa del ordenador
var y = date.getFullYear(); //Variable que devuelve el año
var m = date.getMonth() + 1; //Variable que devuelve el mes
var d = date.getDate(); //Variable que devuelve el día
var h = date.getHours(); //Variable que devuelve la hora
var M = date.getMinutes(); //Variable que devuelve los minutos
var s = date.getSeconds(); //Variable que devuelve los segundos
if(s<10){s="0"+s} //Comprobamos si los segundos son un solo dígito para añadirle el 0 y tener siempre el mismo formato de 00:00:00
if(m<10){m="0"+m} // "
if(M<10){M="0"+M} // "
if(h<10){h="0"+h} // "
if(d<10){d="0"+d} // "
document.getElementById("fecha").innerHTML = (d+"/"+m+"/"+y); //Escribimos en el html el resultado de la fecha
document.getElementById("hora").innerHTML = (h+":"+M+":"+s);  //Escribimos en el html el resultado de la hora
};
//Botón para cambiar modo claro y oscuro
var tempC = 0; //Variable temporal para saber a que color cambiar
const b = "rgb(242, 242, 242)"; // "
const n = "rgb(18, 18, 18)"; // "
function sw(){
    const c = document.querySelector("body").style; //Acortamos código haciéndolo variable
    const a = document.querySelector("a").style;
    const e = document.getElementById("circulo").style; 
    if(tempC == 0){
        c.backgroundColor = n; //Cambiamos el color de fondo del archivo html
        c.color = b; //Cambiamos el color del texto
        a.color = b;
        e.borderColor = b;
        e.backgroundColor = b;
        tempC = 1; //Devolvemos el número contrario para que cuando volvamos a clicar vuelva al blanco
    }else if(tempC == 1){
        c.backgroundColor = b; //Cambiamos el color de fondo del archivo html
        c.color = n; //Cambiamos el color del texto
        a.color = n;
        e.borderColor = n;
        e.backgroundColor = n;
        tempC = 0; //Devolvemos el número contrario para que cuando volvamos a clicar vuelva al negro
    }
}
//Animación botón
var id = null;
var tempA = 0;
var p = 0;
function animacion(){
    const e = document.getElementById("circulo");
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (tempA == 0){
            document.getElementById("boton").removeEventListener("click", animacion);
            document.getElementById("boton").removeEventListener("click", sw);
            if (p == 33){
                clearInterval(id);
                document.getElementById("boton").addEventListener("click", animacion);
                document.getElementById("boton").addEventListener("click", sw);
                tempA = 1;
            } else {
                p = p +1.5;
                e.style.left = p+"px";
            }
        }else if(tempA == 1){
            document.getElementById("boton").removeEventListener("click", animacion);
            document.getElementById("boton").removeEventListener("click", sw);
            if (p == 0){
                clearInterval(id);
                document.getElementById("boton").addEventListener("click", animacion);
                document.getElementById("boton").addEventListener("click", sw);
                tempA = 0;
            } else {
                p = p -1.5;
                e.style.left = p+"px";
            }
        }
    }
}
//Código para el color del twitter
function twitterenter(){
    const a = document.querySelector("a").style; //Acortamos código haciéndolo variable
    a.color = "#a8a1a0"; //Cambiamos al color gris
}
function twitterleave(){
    const a = document.querySelector("a").style; //Acortamos código haciéndolo variable
    if(tempC == 0){ 
        a.color = n; //Cambiamos a negro
    }else if(tempC == 1){
        a.color = b; //Cambiamos a blanco
    }
}
