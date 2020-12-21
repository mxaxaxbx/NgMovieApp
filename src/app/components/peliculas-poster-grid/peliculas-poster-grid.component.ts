import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieI } from 'src/app/interfaces/cartelera.interface';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: MovieI[];

  constructor(private router: Router) {}

  ngOnInit(): void {    
  }

  goToMovie(movie: MovieI) {
    this.router.navigate(['/pelicula', movie.id]);
  }

}
