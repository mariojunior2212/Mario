function bubbleSort(lista) {
for (let i = 0; i < lista.length - 1; i++) {
for (let j = 0; j < lista.length - i - 1; j++) {
if (lista[j] > lista[j + 1]) {
let temp = lista[j];
lista[j] = lista[j + 1];
lista[j + 1] = temp;
}
}
}
return lista;
}
const lista = [6, 2, 8, 4, 10];
const listaOrdenada = bubbleSort(lista);
console.log(listaOrdenada);