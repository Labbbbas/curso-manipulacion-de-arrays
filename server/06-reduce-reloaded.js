const items = [1, 3, 2, 3];

const element_counter = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(element_counter);


// Otro ejemplo
// Quiero saber cuantos jugadores tengo de cada nivel
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

// // Entonces primero hago un map para traerme solo los niveles
// const levels = data.map(item => item.level);
// console.log(levels);

// // Ahora los cuento con reduce
// const level_counter = levels.reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 1;
//     }
//     else {
//         obj[item] = obj[item] + 1;
//     }
//     return obj;
// }, {});
// console.log(level_counter);

// Peeero puedo hacerlo todo junto, para más placer:
const level_counter = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(level_counter);

console.log('');


// Ejercicio: Contar cuantos números hay en determinados rangos
// Primero creamos nuestra lista de 10 números aleatorios del 1 al 10
const list = [];

for (let index = 0; index < 10; index++) {
    // ceil nos garantiza que no salgan ceros
    const number = Math.ceil(Math.random() * 10);
    list.push(number);
}
console.log('My random list: ', list);

// Contamos las coincidencias
const range_counter = list.reduce((obj, item) => {
    if (item >= 1 && item <= 5) {
        if (!obj['1-5']) {
            obj['1-5'] = 1;
        }
        else {
            obj['1-5'] += 1;
        }
    }
    else if (item >= 6 && item <= 8) {
        if (!obj['6-8']) {
            obj['6-8'] = 1;
        }
        else {
            obj['6-8'] += 1;
        }
    }
    else {
        if (!obj['9-10']) {
            obj['9-10'] = 1;
        }
        else {
            obj['9-10'] += 1;
        }
    }
    return obj;
}, {});
console.log(range_counter);


