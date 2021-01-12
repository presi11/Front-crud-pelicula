import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pelicula } from './pelicula';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*',
    Authorization: 'my-auth-token'
  }),
  responseType: 'text'
};
@Injectable({
  providedIn: 'root'
})

export class PeliculaService {

  private url:string="http://localhost:8080/Crud/api/pelicula";

 
  constructor(private http:HttpClient) {
    
   }

   //obtener peliculas
   getAll():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.url+"/all")
  }

  // Crear la pelicula
  save(pelicula:Pelicula):Observable<Pelicula>{
    return this.http.post<Pelicula>(this.url,pelicula,);
  }

  //obtener una pelicula
  get(id:number):Observable<Pelicula>{
    return this.http.get<Pelicula>(this.url+'/'+id )
  }

  //update peliculas
  update(pelicula:Pelicula):Observable<Pelicula>{
      return this.http.put<Pelicula>(this.url, pelicula);
  }

  //eliminar un estudainte
  delete(id:number):Observable<Pelicula>{
    return this.http.delete<Pelicula>(this.url+'/'+id)
  }
}
