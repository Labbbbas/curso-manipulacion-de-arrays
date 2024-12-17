const letters = ['a', 'b', 'c'];

// Método con for normal
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log('original', letters);
console.log('for ', newArray);

// Método con map
console.log('map', letters.map(item => item + '++'));

// Ejercicio:
function multiplyElements(array) {
    return array.map(item => item * 2);
}

const numbers = [2, 4, 6, -2, 10];
console.log('original numbers', numbers);
console.log('multiplied numbers', multiplyElements(numbers));
