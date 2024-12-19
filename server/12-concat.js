const numbers = [1, 2, 3, 4];
const other_numbers = [5, 6, 7, 8];

// Con for
// Clonamos el primer array, para después irle agregando los elementos del otro array
const newArrayFor = [...numbers]; // Usamos el operador ... para no crear referencia en memoria

for (let index = 0; index < other_numbers.length; index++) {
    const element = other_numbers[index];
    newArrayFor.push(element);
}
console.log('for:', newArrayFor);


// Con concat
const newArrayConcat = numbers.concat(other_numbers);
console.log('concat:', newArrayConcat);


// Puedo hacerlo con sólo el operador ...
let prueba = [...numbers, ...other_numbers];
console.log('...', prueba);

// Pero el operador ... funciona correctamente con arrays, 
// con strings da un resultado que no queremos (separa cada letra)
let resultadoIndeseado = [...numbers, ..."random"];
console.log('...string', resultadoIndeseado);


// Incluso lo podemos hacer con push si queremos modificar el array original
numbers.push(...other_numbers);
console.log('Array mutado con push', numbers);
