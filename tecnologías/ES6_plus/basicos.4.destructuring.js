
// Desestructuración de ARRAYS

const aNumbers = [1, 2, 3, 4]

// Desestructuración de un array declarando las variables
const [uno, dos, tres] = aNumbers
console.log(uno, dos, tres)

// Desestructuración de un array sobre variables declaradas previamente
let one, two, three
[one, two, three] = ["uno", "dos", "tres"]
console.log(one, two, three)

function numbers () {
    return ["uno a", "dos a", "tres a"]
}

// Desestructuración de un array devuelto por una función
// recogiendo solo una partte de los miembros del arrray
// en variables declaradas previamente
[one, , three]  = numbers ()
console.log(one, two, three)

// Desestructuración de un objeto

{
    const oNumbers = {
        uno: 1, 
        dos : 2, 
        tres : 3, 
        cuatro : 4
    }

    const {uno , cuatro, tres, dos} =  oNumbers

    console.log(uno, dos, tres, cuatro)
}

{
    // Desestructuración en una función al recibir los parámetros

    // suma = ( {a,b} = {} ) => { a + b }
    function suma ( {a,b} = {} ) 
        { return a + b }

    console.log( suma( {a: 4, b: 6} ) )

    // lo mismo si el objeto es una variable en vez de un literal
    const aNumbers = {a: 4, b: 6} 
    console.log( suma( aNumbers ) )

    // Desestructuración "inversa" también el enviar los parámetros
    const a =  14, b = 16
    console.log( suma( {a, b} ) )
}

{

    // Uso de alias en la desestructuración de objetos
    
    const oUsuario = {
            nombre : "Pepe",
            apellidos : "Perez"
    }

    const { nombre: name, apellidos: lastname } = oUsuario;
    console.log (name, lastname)
}