//arreglo para saber cuales divs ya estan ocupadas
let arreglo = ["","",""];

//funcion que evita que se abra  como enlace al soltar la imagen
function allowDrop(ev){
    ev.preventDefault();
}

//que sucede cuando arrastro un elemento
function drag(ev){
    //metodo que establece el tip de datos y el valor de datos arrastado
    //en este caso el dato es texto y el valor es el id del elemento arrastrado: "gato"
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    //mediante el ev.target.id tomo el nombre del id del div  que puede ser 0 1 2
    //si el arreglo en diah  posicion esta vacio, significa que no tiene nada, osea puedo
    //soltar alli. caso contrario, ya tiene elemento
    if(arreglo[parseInt(ev.target.id)]===""){
        //obtengo los datos arrastrados con el elemento dataTransfer.getData(). este metodo devolvera
        //cualquier dato que se haya establecido en el mismo tipo en metodo setData(), En este
        //ejemplo data queda con gato, perro o loro
        var data = ev.dataTransfer.getData("text");

        /* console.log("traigo conenido de data", ev.toElement.innerHTML) */
        ev.toElement.innerHTML = ""

        //agrego al arreglo el nombre del id
        arreglo[parseInt(ev.target.id)] = data;
        //agregue el elemento arrstrado al elemetno soltado
        ev.target.appendChild(document.getElementById(data));
    }

    if (arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != ""){
        if (arreglo[0] == "img01" && arreglo[1] == "img02" && arreglo[2] == "img03"){
            document.querySelector(".rompe-titulo").innerHTML = `<p class="rompe-titulo">MUY BIEN!! Presiona Reiniciar para seguir jugando...</p>`;
            /* document.querySelector(".imagenes-armar").innerHTML = `<p style="grid-template-columns: 1fr;" class="rompe-titulo">Muy bien Ganaste!!!!!</p>`; */
            

            
            console.log("Son todas iguales ganeeee")
        } else {
            document.querySelector("h1").innerHTML = "INTENTA DE NUEVO";
            console.log("Son distintas perdi")
        }
    }
}

const d = document,
        w = window,
        btnReinicio = d.querySelector(".btn-reiniciar");

        console.log("first", btnReinicio)

        btnReinicio.addEventListener("click", e => {
            w.location.reload();
        })