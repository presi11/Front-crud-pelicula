import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { from } from 'rxjs';
import { FormPeliculaComponent } from './peliculas/form-pelicula.component';

const routes:Routes=[
  {path:'',redirectTo:'/peliculas',pathMatch:'full'},
  {path: 'peliculas',component:PeliculasComponent},
  {path: 'peliculas/form',component:FormPeliculaComponent},
  {path: 'peliculas/form/:id',component:FormPeliculaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    FormPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
