// Ejemplo de función que define un decorator sencillo
// sin argumentos

function course(target) {
    Object.defineProperty(
        target.prototype, 
        'curso', 
        {value: () => "Angular 2"}
    )
}

// Uso del anterior decorator para modificar una clase

@course
class Person {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Instanciación de un objeto de esta clase
{
    let oPersona = new Person("Pepe", "Pérez");
    console.log(oPersona.curso()); // Angular 2
}

// Ejemplo de función que define un decorator con argumentos
function Student(config) { 
    return function (target) {
        Object.defineProperty(
            target.prototype,
            'course',
            {value: () => config.course} 
        )
    }
}

@course
@Student({
    course: "Angular 5"
})
class Persona {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

{
    let oPersona = new Persona("Pepe", "Pérez");
    console.log(oPersona.curso()); // Angular 2
    console.log(oPersona.course()); // Angular x
}
