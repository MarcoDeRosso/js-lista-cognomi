var output = document.getElementById("output");
var listaArray = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var listHtml = " ";

// creo la lista

listaArray.push(prompt("Quale è il tuo cognome?"))
console.log(listaArray);
listaArray.sort();

// visualizzo la lista

for (var i = 0; i < listaArray.length; i++) {
    listHtml += "<li>" + listaArray[i] + "</li>";
}
output.innerHTML = listHtml;