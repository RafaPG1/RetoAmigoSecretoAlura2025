
function agregarAmigo() {
    let agregandoAmigos = document.getElementById("amigo");
    let amigoAgregado = agregandoAmigos.value.toUpperCase();
    if (amigoAgregado === "") {
        alert("Ingrese un nombre, el campo no debe quedar esta vacio");
    } else if (amigos.includes(amigoAgregado)) {
        alert(`No repitas el nombe ${amigoAgregado} , verifca que no sea un error`)
    } else {
    amigos.push(amigoAgregado);
    console.log(amigos);
    }
    agregandoLista();
    agregandoAmigos.value = "";
}
function agregandoLista(){
    let addlista = document.getElementById("listaAmigos")
    addlista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let visualizandoLista = document.createElement("li");
        visualizandoLista.textContent = amigos[i];
        addlista.appendChild(visualizandoLista);
    } 
}
function sortearAmigo() {
let azar = Math.floor(Math.random()*amigos.length);
let nombreRandom = amigos[azar];
    if (amigos == 0) {
    alert("No hay amigos agregados :(");
    } else if (amigos.length === 1){
        alert("Para realizar el sorteo de amigos  ingresa por lo menos 2 amigos.")
    } else {
        document.querySelector("#aañadir").setAttribute("disabled", "true");
        let desactivar = document.getElementById("aañadir");
        desactivar.innerHTML = "Click en resetear :)";
        let resultadofinal = document.getElementById("resultado");
        resultadofinal.innerHTML = `Tu amigo secreto es ${nombreRandom}`;
        let boton = document.getElementById("sorteodeAmigos");
        boton.innerHTML = `<img id="icono" src="assets/deshacerr.png" alt="Ícono para resetear"> Resetear`;
        boton.onclick = resetearSorteo;
        return;
    }  
}
function inicial(){
    document.getElementById('aañadir').removeAttribute('disabled');
    amigos = [];
    document.getElementById("resultado").textContent = "";
    document.getElementById("listaAmigos").textContent = "";
    console.clear();
}

function resetearSorteo() {
    inicial();
    
    desactivar = document.getElementById("aañadir");
    desactivar.innerHTML = "Añadir";
    boton = document.getElementById("sorteodeAmigos");
    boton.innerHTML = `<img id="icono" src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo`;
    
    boton.onclick = sortearAmigo;
    document.getElementById("amigo").value = "";
}

resetearSorteo();
