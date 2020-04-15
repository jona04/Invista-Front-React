export default function sumProperty(arr, valor, quantidade) {
    return arr.reduce((total, obj) => {
        return total + obj.chapa[valor] * obj[quantidade];
    }, 0);
}

// export default function sumProperty(arr, type) {
//     return arr.reduce((total, obj) => {
//         if (typeof obj.chapa[type] === 'string') {
//             return total + obj.chapa[type]);
//         }
//         return total + obj.chapa[type];
//     }, 0);
// }
