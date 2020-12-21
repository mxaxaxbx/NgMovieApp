import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MovieI } from 'src/app/interfaces/cartelera.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  public peliculas: MovieI[] = []
  public peliculasSlideShow: MovieI[] = []

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =(document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos > max) {
      if (this.peliculasSvc.cargando) {return;}

      this.peliculasSvc.getCartelera()
        .subscribe(movies => {
          this.peliculas.push(...movies);
        })
    }
    
  }

  constructor(private peliculasSvc: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasSvc.getCartelera()
      .subscribe(movies => {
        this.peliculas = movies;
        this.peliculasSlideShow = movies;
      })
  }

  ngOnDestroy():void {
    this.peliculasSvc.resetCarteleraPage();
  }

}
