const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

// Veo el objeto original
console.log('original', orders);

// Me traigo solo un atributo
const response = orders.map(item => item.total);
console.log('response', response);

// // Agrego un nuevo atributo a todos los elementos de mi objeto
// const response2 = orders.map(item => {
//     item.tax = 0.19;
//     return item;
// });
// console.log('response2', response2);
// console.log('original', orders);
// // Pero tenemos un problema ya que modificamos el objeto original

// Para solucionarlo:
const response3 = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    };
});
console.log('response3', response3);
console.log('original', orders);