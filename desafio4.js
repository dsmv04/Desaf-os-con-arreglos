/* 4. Arreglo invertido
Escribe una función que invierta los valores de un arreglo y los devuelva. */


function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
   
let result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]