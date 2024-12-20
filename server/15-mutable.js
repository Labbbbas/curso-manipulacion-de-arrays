// Quiero pasar un producto a mi lista de productos mutando la lista original
const productsV1 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProductsV1 = [];

console.log('\nEstado inicial');
console.log("products", productsV1);
console.log("myProducts", myProductsV1);
console.log('\n' + "-".repeat(50));

const productIndexV1 = productsV1.findIndex(product => product.id === '🍕'); // Lo busco por el id

if (productIndexV1 !== -1) {
    myProductsV1.push(productsV1[productIndexV1]); // Agregamos el producto a nuestros productos
    productsV1.splice(productIndexV1, 1); // Si quiero mutar el array original eliminando el elemento encontrado
}

console.log('\nEliminando producto del array original');
console.log("products original mutado", productsV1);
console.log("myProducts", myProductsV1);
console.log('\n' + "-".repeat(50));


// Reto 1: Quitar el producto sin mutar el array original
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProductsV2 = [];

const productIndexV2 = productsV2.findIndex(product => product.id === '🍕'); // Lo busco por el id

let nuevoArray = [];
if (productIndexV2 !== -1) {
    myProductsV2.push(productsV2[productIndexV2]); // Agregamos el producto a nuestros productos
    nuevoArray = productsV2.filter((_, index) => index !== productIndexV2); 
}

console.log('\nReto 1: Crear un nuevo arreglo sin mutar el original');
console.log('nuevo array', nuevoArray);
console.log("products original", productsV2);
console.log("myProducts", myProductsV2);
console.log('\n' + "-".repeat(50));


// Update
console.log(('\nUpdate mutando el array original'));

const productsV3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
console.log('products antes update', productsV3);


const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

const productIndexV3 = productsV3.findIndex(product => product.id === update.id); // Lo busco por el id

// Clono el elemento original y le agrego los cambios, si no sólo me podría los cambios borrando el contenido original
productsV3[productIndexV3] = {
    ...productsV3[productIndexV3],
    ...update.changes
};

console.log('products despues update', productsV3);
console.log('\n' + "-".repeat(50));


// Reto 2: Hacer un update sin mutar el array original, o sea creando un nuevo array
const productsV4 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update2 = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

let nuevoArray2 = [...productsV4];

const productIndexV4 = productsV4.findIndex(product => product.id === update2.id); // Lo busco por el id

// Clono el elemento original y le agrego los cambios, si no sólo me podría los cambios borrando el contenido original
nuevoArray2[productIndexV4] = {
    ...nuevoArray2[productIndexV4],
    ...update.changes
};

console.log(('\nReto 2: Update mutando el array original'));
console.log('products original', productsV4);
console.log('nuevo array', nuevoArray2);