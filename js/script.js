var output = document.getElementById("output");
var listaArray = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var listHtml = " ";

// creo la lista

listaArray.push(prompt("Quale è il tuo cognome?"))
console.log(listaArray);
listaArray.sort(function(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) return 0;
    return a < b ? -1 : 1;
});

// visualizzo la lista

for (var i = 0; i < listaArray.length; i++) {
    listHtml += "<li>" + listaArray[i] + "</li>";
}
output.innerHTML = listHtml;