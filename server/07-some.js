// Some evalúa si tan sólo un elemento cumple con una condicion, y devuelve true o false

const numbers = [1, 2, 3, 4];

// Con for
let response = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        response = true;
        break;
    }
}
console.log('Con for:', response);

// Con some
const response2 = numbers.some(item => item % 2 === 0);
console.log('Con some:', response2);



// Ejemplo con objetos
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

const response3 = orders.some(item => item.delivered === true);
console.log('Some order delivered:', response3);



// Ejemplo más complejo: Quiero saber si se traslapan dos citas
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const { areIntervalsOverlapping } = require('date-fns');


const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate },
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));