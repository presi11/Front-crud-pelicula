import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { PeliculaService } from './pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  Nombre:String= "Lista de mis peliculas";
  peliculas: Pelicula[] = [];


  constructor(private peliculaService:PeliculaService)
  {

  }

  ngOnInit(): void {
    this.peliculaService.getAll().subscribe(
      e =>this.peliculas=e
    );



    }
    delete(pelicula:Pelicula):void{
      this.peliculaService.delete(pelicula.id).subscribe((data:any)=>{
        console.log(data);
        if(data.success==1){
          let aux=this.peliculas.indexOf(pelicula)
          this.peliculas.splice(aux, 1);
          console.log("Hola toy aqui");
      }
      })
    }

  

}

