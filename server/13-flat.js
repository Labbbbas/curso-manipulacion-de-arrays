// Flat sirve para que un array de arrays 
// se convierta en un solo array

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Con for
let flatArrayFor = [];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        const element = matriz[i][j];
        flatArrayFor.push(element);
    }
}
console.log('for:', flatArrayFor);


// Para aplanar un arreglo multidimensional sin flat, y con recursión
let arreglo = [
	[1,2,3],
	[4,5,6,[4,5,6,[7,8,9]]],
	[7,8,9,[10,11,12,[13,14,15,[13,14,15]]]]
];

let arregloAplanado = [];

function aplanarArreglo(subArreglo) {
    for (let i = 0; i < subArreglo.length; i++) {
        const valor = subArreglo[i]; // Tomamos cada elemento
        if (Array.isArray(valor)) { // Si es un subarreglo...
            aplanarArreglo(valor); // Nos metemos dentro de él con recursión  
        }
        else { // Si no es un arreglo, entonces en un valor primitivo
            arregloAplanado.push(valor); // Lo agregamos al arreglo plano
        }
     }
}

aplanarArreglo(arreglo); // Echamos a andar la función 

console.log('Con recursividad:', arregloAplanado);


// Con flat
const arrayConFlat = arreglo.flat(Infinity); 
// Para no tener que poner el máximo de niveles que tiene el arreglo,
// podemos usar infinity, para que flat aplane el arreglo hasta donde sea necesario
console.log('flat:', arrayConFlat);
