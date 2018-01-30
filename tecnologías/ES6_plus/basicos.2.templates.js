
// Más información en
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings

// Función de etiquetado (postprocesado) para un template string
// recive como parámetros 
// un array strings, con las cadenas de texto de la plantilla
// una serie de argumentos con los resultados de la interpolación de cada variable 
// que se recogen como un array gracias al operador de propagación...

const tag = function (strings, ...args) {
    console.log(strings)
    console.log(args)
    return `Adios ${args[1]}`
}

const SALUDO = "Hola"
const TARGET = "Mundo"

const RESULT = tag `Mensaje:
                    ${SALUDO} ${TARGET}!!`
console.log(RESULT)


// El argumento strings posee una propiedad especial raw[n] que
// permite acceder a las cadenas de texto tal como fueron ingresadas.

const noRaw = function (strings, args) {
    return strings[0]
}

const raw = function (strings, args) {
    return strings.raw[0]
}

console.log(noRaw `Bienvenidos al curso \n${SALUDO}, ${TARGET}!!`)  
console.log(raw `Bienvenidos al curso \n${SALUDO}, ${TARGET}!!`)  


// Funcionalidad en una función de etiquetado

const tagPuntos = function(strings, args) {
    return strings.map(function(s){
      return s.split('').map(function(s){
        return `${s}.`;
      })
      .join('')
    })
    .join('');
  }
  
  console.log(tagPuntos `Hello, World!`);