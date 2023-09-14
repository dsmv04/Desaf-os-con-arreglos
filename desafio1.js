/* 1. Siempre hambriento
Escribe una función a la que se le asigne un arreglo,
y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola.
Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez. */

function alwaysHungry(arr) {
    var foodCount = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == "comida") {
            console.log("delicioso");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("Tengo Hambre");
    }
}
   
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"









