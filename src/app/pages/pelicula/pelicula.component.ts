import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MovieResponseI } from 'src/app/interfaces/movie-response.inteface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { CastI } from 'src/app/interfaces/credits-response.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {ñ

  public pelicula: MovieResponseI;
  public cast: CastI[] = [];

  constructor(private route: ActivatedRoute, private peliculasSvc: PeliculasService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    const {id} = this.route.snapshot.params;

    combineLatest([
      this.peliculasSvc.getPeliculaDetalle(id),
      this.peliculasSvc.getCast(id)
    ])
      .subscribe(([pelicula, cast]) => {
        if(!pelicula){
          return this.router.navigate(['/']);
        }

        this.pelicula = pelicula;
        this.cast = cast.filter(actor => actor.profile_path !== null);
      })

    // this.peliculasSvc.getPeliculaDetalle(id)
    //   .subscribe(movie => {
    //     if(!movie){
    //       return this.router.navigate(['/']);
    //     }

    //     this.pelicula = movie;
    //   });

    // this.peliculasSvc.getCast(id)
    //   .subscribe(cast => {
    //     this.cast = cast
        
    //   })
  }

  onRegresar() {
    this.location.back();
  }

}
