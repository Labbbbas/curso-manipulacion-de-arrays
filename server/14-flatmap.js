const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Podemos hacer un map y flat por separado si quiero todos los attributes en un mismo array
const porSeparado = users.map(user => user.attributes).flat(Infinity);
console.log('map y flat por separado:', porSeparado);

// Con flatMap
const juntos = users.flatMap(user => user.attributes);
console.log('flatMap:', juntos);


// Ejercicio: Quiero un array flat de sólo las starDate
const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const startDateFlat = Object.values(calendars).flatMap(calendar => {
    return calendar.map(date => date.startDate)
});

console.log(startDateFlat);

console.log();


// Ejercicio: Contar palabras
zenPython = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];

arrayVacio = [];

function countWords(array) {
    if (array.length === 0){
        return 0;
    }
    const arraySeparado = array.join(' ').split(' ');
    return arraySeparado.length;
}

console.log('Zen de python:', countWords(zenPython));

console.log('Array vacío:', countWords(arrayVacio));