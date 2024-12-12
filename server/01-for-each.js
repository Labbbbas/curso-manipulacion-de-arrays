// forEach sirve para recoger entre todos los elementos del array

const letters = ['a', 'b', 'c'];

// Método con for, muchas líneas y medio engorroso
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

// Método con forEach, fácil de entender y menos líneas
letters.forEach(element => console.log('forEach', element));
