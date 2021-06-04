var output = document.getElementById("output");
var listaArray = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var listHtml = " ";

// creo la lista

var userSurname = prompt("Quale è il tuo cognome?")

console.log(listaArray);
//per ovviare al problema dove sort ordina le lettere maiuscole in un gruppo
//differente rispetto alle lettere minuscole, allora trasformiamo l'input
//in una parola con la prima lettera maiuscola.

userSurname = userSurname[0].toUpperCase() + userSurname.slice(1);
listaArray.push(userSurname);
// listaArray.sort(function(a, b) {
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//     if (a == b) return 0;
//     return a < b ? -1 : 1;
// });
listaArray.sort();
// visualizzo la lista

for (var i = 0; i < listaArray.length; i++) {
    listHtml += "<li>" + listaArray[i] + "</li>";
}
output.innerHTML = listHtml;

var position = listaArray.indexOf(userSurname) + 1;

console.log(position);