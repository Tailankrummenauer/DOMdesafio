

function adicionarElemento(){
    var numeroResidencia = document.getElementById("numeroResidencia").value
    var bairro = document.getElementById("bairro").value
    var cidade = document.getElementById("cidade").value
    var areaCasa = document.getElementById("areaCasa").value

    var novaLinha = document.createElement("tr")
    var novaColuna = document.createElement("td")
    var novaColuna1 = document.createElement("td")
    var novaColuna2 = document.createElement("td")
    novaColuna.innerText = areaCasa + "m²"
    novaColuna1.innerText = ", número " + numeroResidencia
    novaColuna2.innerText = ", (" +bairro+ " - " +cidade+ ")"
   

    var removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")


    novaLinha.appendChild(novaColuna)
    novaLinha.appendChild(novaColuna1)
    novaLinha.appendChild(novaColuna2)
    novaLinha.appendChild(removeButton)



    document.getElementById("house").appendChild(novaLinha)


}

function removeHouse(button){
    var trToRemove = button.parentNode
    document.getElementById("house").removeChild(trToRemove)
}