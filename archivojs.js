let mensajes = ["BIENVENIDO A LA AGENDA", "WELCOME TO THE SCHEDULER", "BIENVENU A L'ORDRE DU JOUR"]
let posicion = (Math.floor(Math.random() * mensajes.length));

let bienvenida = document.getElementById("saludo");
bienvenida.innerText = `${mensajes[posicion]}`;

function agendarEvento() {
    let titulo = prompt(" TITULO DEL EVENTO:");
    let fecha = prompt(" FECHA DEL EVENTO:");
    let hora = prompt(" HORA DEL EVENTO:");
    let invitados = [];
    do {
        invitados.push(prompt(" INGRESE INVITADO DEL EVENTO:"));
    } while (confirm("Desea agregar otro invitado?"))

    let eventoGuardado = document.createElement("div");
    eventoGuardado.innerHTML = `<h3> TITULO DEL EVENTO:<h3> <p> ${titulo} <p>
    <h4> FECHA:<h4> <p> ${fecha} <p>
    <h4> HORA:<h4> <p> ${hora} <p>
    <h4> INVITADOS:<h4>
    <p> ${invitados} <p>
    <p> --------------------- <p>`

    let listadoDeEvento = document.getElementById("eventoCargado");
    listadoDeEvento.appendChild(eventoGuardado);
}

do {
    agendarEvento()
} while (confirm("Desea agregar otro evento?"));




// let titulo = document.getElementById("titulo").value;
// let fecha = document.getElementById("fecha").value;
// let hora = document.getElementById("hora").value;
// let invitados = document.getElementById("invitados").value;