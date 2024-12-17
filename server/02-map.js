const letters = ['a', 'b', 'c'];

// Método con for normal
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log('original', letters);
console.log('new', newArray);

// Método con map
console.log(letters.map(item => item + '++'));
