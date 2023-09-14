/* 3. Mejor que el promedio
Dado un arreglo de números, devuelve un recuento
de cuántos de los números son mayores que el promedio. */

function betterThanAverage(arr) {
    let sum = 0;
    // calcula el promedio

    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;

    let count = 0
    // cuenta cuantas variables son mayores que el promedio

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta