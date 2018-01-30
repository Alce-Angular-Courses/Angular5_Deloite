// import { Empleado } from './empleado';
interface Empleado {
    id: number,
    name: string,
}

class Empresa {
    
        // Tipos básicos
        private nombre: string;
        private numEmpleados: number;
        // Tipos Array
        public aUsuarios: Array<string>;
        public aDatos: string[];
        // Tipos Objeto
        public oVacio: {}; // sería un absurdo, sin propiedades
        public oDatos: {nombre: string, numEmpleados: number};
        // Tipo Objeto basado en un interfaz
        public oEmpleado: Empleado;
        // Tipo Array de objetos correspondiente
        public aEmpleados: Array<Empleado>;
    
        constructor(nombre: string, numEmpleados: number) {
            this.nombre = nombre;
            this.numEmpleados = numEmpleados;
        }
    
        getNombre() {
            return this.nombre;
        }
        
        toString() {
            return "Nombre:" + this.nombre +
                ", numEmpleados:" + this.numEmpleados;
        }
    }

    let oEmpresa = new Empresa('Pepe SL', 200);
    console.log(oEmpresa.toString());