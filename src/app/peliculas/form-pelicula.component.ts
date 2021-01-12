import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from './pelicula';
import { PeliculaService } from './pelicula.service';

@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.css']
})
export class FormPeliculaComponent implements OnInit {

  id:number = 10;
  pelititulo:string = "";
  sinopsis:string = "";
  genero:string = "";

  pelicula:Pelicula = new Pelicula(this.id,this.pelititulo,this.sinopsis,this.genero);
  titulo:String="Registro de la pelicula"

  
  constructor(private peliculaService:PeliculaService, private router:Router, private activatedRoute:ActivatedRoute) {
   }

  ngOnInit(): void {

      this.cargar();
  }

  save():void{
    console.log(this.pelicula);
    this.peliculaService.save(this.pelicula).subscribe(
      res=>this.router.navigate(['/peliculas'])
    )
    
  }

  cargar():void{
    this.activatedRoute.params.subscribe(

      e=>{
            let id=e['id'];
            if(id){
              this.peliculaService.get(id).subscribe(
                es=>this.pelicula=es
              );
            }
      }
    );
  }



}
