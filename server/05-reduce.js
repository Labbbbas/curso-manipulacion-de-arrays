const totals = [1, 2, 3, 4];

// Con for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element
}
console.log('Suma con for', sum);

// Con reduce
// Recibe dos parámetros: el acumulador y el item, 
// después pones la operación que quieres hacer, y el estado inicial
const sum_reduce = totals.reduce((sum, item) => sum + item, 0);
console.log('Suma con reduce', sum_reduce);
