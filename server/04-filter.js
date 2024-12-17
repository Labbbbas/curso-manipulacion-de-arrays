const words = ["spray", "limit", "elite", "exuberant"];

// Con método for
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArray.push(element);
    }
}
console.log('Palabras con 6 o más letras con for', newArray);

// Array original para ver que no mutó
console.log('original words', words);

// Espacio en blanco
console.log('');

let response = words.filter(item => item.length >= 6);
console.log('Palabras con 6 o más letras con filter', response);

// Array original para ver que no mutó
console.log('original words', words);

// Espacio en blanco
console.log('');

// Otro ejemplo
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 212,
        delivered: false,
    },
];

// Para ver cuantas ordenes fueron entregadas y cuestan más de 100 dólares
const delivered = orders.filter(item => item.delivered === true && item.total >= 100);
console.log('orders delivered and over 100 dollars', delivered);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}
console.log('Search: ', search('Nico'));
// Podría devolver un array vacío (porque ningun item cumple la condición)
// o el array completo (porque todos los items cumplieron la condición)
// o sólo algunos item

// Ejercicio
function filterByLength(array) {
    return array.filter(item => item.length >= 4);
}

const words2 = ['amor', 'sol', 'piedra', 'día'];
console.log('Todas la paalabras: ', words2);
console.log('Palabras con 4 o más letras', filterByLength(words2));