import { Empleado } from "./empleado";

let emps = new Array<Empleado>();
emps.push(new Empleado('Pepe', 500));
emps.push(new Empleado('Juan', 200));
emps.push(new Empleado('Luis', 350));

for (let emp of emps) {
    console.log(emp.getNombre());
}

emps.forEach(emp => {
    console.log(emp);
});