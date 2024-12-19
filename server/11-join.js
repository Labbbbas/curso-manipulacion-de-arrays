const elements = ['Fire', 'Air', 'Water'];

// Con for
let join_for = '';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    // Para que no ponga la coma después del último elemento
    if (index === elements.length - 1) {
        join_for += element;
    }
    else {
        join_for += element + ', ';
    }
}
console.log('for:', join_for);


// Con join
const join_join = elements.join(', ');
console.log('join:', join_join);


console.log(); // Espacio en blanco



// Uso práctico de varios métodos de js: 
// Tenemos un título que lo queremos transformar a formato de url
const title = "Curso de manipulación de arrays";
console.log('Título original:', title);


const titleToUrlFormat = title.toLowerCase().split(' ').join('-');
console.log('Título a url:', titleToUrlFormat);