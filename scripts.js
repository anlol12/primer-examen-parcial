function mostrarResultado(resultado) {
    var resultadosDiv = document.getElementById("resultados");
    var nuevoResultado = document.createElement("p");
    nuevoResultado.textContent = resultado;
    resultadosDiv.appendChild(nuevoResultado);
}

document.getElementById("agregarParrafoBtn").addEventListener("click", function() {
    var contenido = document.getElementById("inputNuevoParrafo").value.trim();
    if (contenido !== "") {
        var nuevoParrafo = document.createElement("p");
        var texto = document.createTextNode(contenido);
        nuevoParrafo.appendChild(texto);
        document.body.append(nuevoParrafo);
        nuevoParrafo.classList.add("nuevo");
        mostrarResultado("Nuevo párrafo agregado: " + contenido);
    }
    document.getElementById("inputNuevoParrafo").value = ""; // Borrar contenido del campo de texto
});

document.getElementById("agregarElementoListaBtn").addEventListener("click", function() {
    var contenido = document.getElementById("inputNuevoElementoLista").value.trim();
    if (contenido !== "") {
        var nuevoElementoLista = document.createElement("li");
        var textoLista = document.createTextNode(contenido);
        nuevoElementoLista.appendChild(textoLista);
        var lista = document.getElementById("miLista");
        lista.appendChild(nuevoElementoLista);
        nuevoElementoLista.classList.add("nuevo");
        mostrarResultado("Nuevo elemento de lista agregado: " + contenido);
    }
    document.getElementById("inputNuevoElementoLista").value = ""; // Borrar contenido del campo de texto
});

document.getElementById("agregarParrafo2Btn").addEventListener("click", function() {
    var contenido = document.getElementById("inputNuevoParrafo2").value.trim();
    if (contenido !== "") {
        var nuevoParrafo2 = document.createElement("p");
        var texto2 = document.createTextNode(contenido);
        nuevoParrafo2.appendChild(texto2);
        var primerParrafo = document.getElementById("primerParrafo");
        document.body.insertBefore(nuevoParrafo2, primerParrafo);
        nuevoParrafo2.classList.add("nuevo");
        mostrarResultado("Otro nuevo párrafo agregado: " + contenido);
    }
    document.getElementById("inputNuevoParrafo2").value = ""; // Borrar contenido del campo de texto
});
