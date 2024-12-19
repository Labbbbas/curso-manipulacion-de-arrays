const numbers = [1, 30, 49, 29, 10, 13];

// Con for
let result_for = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        result_for = element;
        break;
    }
}
console.log('for:', result_for);


// Con find
const result_find = numbers.find(item => item === 30);
console.log('find:', result_find);


// Buscando por id con find
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const busqueda_id = products.find(item => item.id === '🥞');
console.log('find id:', busqueda_id);

// Con findIndex me puede decir la posición del objeto que coincidió
const busqueda_index = products.findIndex(item => item.id === '🌭');
console.log('findIndex:', busqueda_index);
// Si no encuentra la posición, nos regresa un -1