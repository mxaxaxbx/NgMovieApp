import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieI } from 'src/app/interfaces/cartelera.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  peliculas: MovieI[] = [];
  q: string = '';

  constructor(private route: ActivatedRoute, private peliculasSvc: PeliculasService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.q = params['texto'];
        
        this.peliculasSvc.buscarPeliculas(params['texto'])
          .subscribe(res => {
            this.peliculas = res;
          })
      })
    
  }

}
