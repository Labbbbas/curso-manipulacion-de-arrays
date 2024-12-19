const pets = ['cat', 'dog', 'bat'];

// Con for
let isIncludedFor = false;

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'cat') {
        isIncludedFor = true;
        break;
    }
}
console.log('Is cat included with for?', isIncludedFor);


// Con includes
const isCat = pets.includes('cat');
console.log('Is cat included with includes?', isCat);

const isDog = pets.includes('dog');
console.log('Is dog included with includes?', isDog);

const isFish = pets.includes('fish');
console.log('Is fish included with includes?', isFish);


// Ejercicio
function filterByTerm(array, term) {
    return array.filter(item => {
        if (item.includes(term)) {
            return item;
        }
    }, []);
}

console.log(filterByTerm(["ana", "santi", "nico", "anastasia"], "ana"));
