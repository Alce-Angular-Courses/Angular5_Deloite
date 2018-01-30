// Ejemplo de código en ES6

// El uso de var sigue siendo identico a versiones anteriores,
// var data = [{precio: 12}, {precio: 34}, {precio: 19}];  


/* (function prueba_var () {
    console.log(x)
    var x = 20
})();

(function prueba_let () {
    console.log(x)
    let x = 20
})(); */

(function bloques () {
    let x = 0
    let y = 0

    {
        x = 20
        let y = "Modificada"
        console.log(x)
        console.log(y)
        let z = 25
    }

    console.log(x)
    console.log(y)
    // console.log(z)

})();

(function constantes () {
    const MES = "Enero"
    const DIAS = 31
    const USER = {
        name : "",
        apellido : "",
        puesto : ""
    }

    USER.name = "Pepe"
    USER.apellido = "Perez"
    USER.edad = 25
    delete USER.puesto

    console.log(USER)
    USER = {}
})()