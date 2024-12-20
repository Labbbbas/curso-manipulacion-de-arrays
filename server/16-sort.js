// sort es mutable, o sea que modifica el array original

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log('\nOrden alfabético:', months); // Por orden alfabético: [ 'Dec', 'Feb', 'Jan', 'March' ]


const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log('\nPor tabla ASCII:', numbers); // En base al primer número: [ 1, 100000, 21, 30, 4 ]
// Para ordenarlo de menor a mayor:
numbers.sort((a, b) => a - b);
console.log('\nMenor a mayor:', numbers); // [ 1, 4, 21, 30, 100000 ]
// Para que sea de mayor a menor, sólo lo invertimos:
numbers.sort((a, b) => b - a);
console.log('\nMayor a menor:', numbers); // [ 100000, 30, 21, 4, 1 ]


const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
console.log('\nOrden alfabético:', words);


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a, b) => a.total - b.total);
console.log('\nMenor a mayor por total:', orders);

orders.sort((a, b) => b.total - a.total);
console.log('\Mayor a menor por total:', orders);


// Reto: Ordenar usando fechas
const orders2 = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2021, 3, 8, 4),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2021, 9, 12, 3),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2021, 8, 2, 2),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2021, 1, 1, 9, 30),
    },
];
orders2.sort((a, b) => a.date - b.date);
console.log('\nMas reciente a menos reciente:', orders2);

orders2.sort((a, b) => b.date - a.date);
console.log('\nMenos reciente a mas reciente:', orders2);