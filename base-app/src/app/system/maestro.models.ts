export interface Idioma {
    name: string;
    code: string;
}

export class IdiomaModel implements Idioma {
    name: string;

    constructor (name: string, public code: string) {
        this.name = name;
    }
}

export class MaestroIdiomas {
    public idiomas: Array<Idioma>;
    // public idiomass: string[];

    constructor () {
        // this.idiomas = [];
        this.idiomas = new Array<Idioma>();
        this.getDatos();
    }

    getDatos() {
        /* this.idiomas.push({
            name: 'Español',
            code: 'es' });  */
            this.idiomas.push(
                new IdiomaModel('Español', 'es' )
            );
    }
}
