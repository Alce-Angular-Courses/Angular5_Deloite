// ejemplo de clase en TypeScript
interface Usuario {
    id: number,
    name: string,
    direccion: {calle : string,
                 num : number,
                 zip: string}
    formación?: Array<string>
    saludar: Function;
}

class Socio implements Usuario {
    id: number;
    name: string;
    direccion: {calle : string,
                 num : number,
                 zip: string}
    saludar() {
        console.log(`Hola, saludos de ${name}`)
    };
}

let pepe = new Socio();
pepe.saludar()