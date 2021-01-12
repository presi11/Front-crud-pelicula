export class Pelicula {
    id:number;
    titulo:string;
    sinopsis:string;
    genero:string;

    constructor(id:number, titulo:string, sinopsis:string, genero:string) {
        this.id = id;
        this.titulo = titulo;
        this.sinopsis =sinopsis;
        this.genero = genero;
    }
}
