/* 5. Arreglo de Fibonacci
Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza.
Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n.
Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia.
Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia
es 5. */

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [0, 1];
    while(fibArr.length < n) {
        let prev = fibArr[fibArr.length-1];
        let prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
   
let result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]