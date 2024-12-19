const numbers = [1, 30, 39, 29, 10, 13];

// Con for
let respuesta = true;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > 40) {
        respuesta = false;
        break;
    }
}

console.log('Con for:', respuesta);


// Con every
const respuesta2 = numbers.every(item => item < 40);

console.log('Con every:', respuesta2);



// Ejercicio: ¿Todos los miembros del equipo son menores de 15 años?
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const esMenor = team.every(member => member.age < 15);
console.log('¿Todos los miembros del equipo son menores de 15 años?', esMenor);
