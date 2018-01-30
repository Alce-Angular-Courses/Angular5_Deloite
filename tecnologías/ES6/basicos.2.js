// Ejemplo de código en ES6

// Nuevos objetos iterables de tipo Map
let map = new Map()
.set("A",1)
.set("B",2)
.set("C",3);

// Alternativa para la creación de dichos objetos

let map2 = new Map([
    [ "A", 1 ],
    [ "B", 2 ],
    [ "C", 3 ]
    ]);

let aDatos = [10,20,30]

// El bucle for ... in, adecuado para Objetos, 
// producia resultados incongruentes en el caso de los Arrays 

let nTotal1 ="";
for (let dato in aDatos) {
    nTotal1 += dato
    console.log(dato);
    }
    // "0"
    // "1"
    // "2"
console.log(`Total : ${nTotal1}`);

// El bucle for of se comporta igualmente en el caso de Objetos
// añadiendo un comportamiento más coherente en caso de Arrays

let nTotal2 = 0; 

for (let dato of aDatos) {
    nTotal2 += dato
    console.log(dato);
    }
    // 10
    // 20
    // 30
console.log(`Total : ${nTotal2}`);

