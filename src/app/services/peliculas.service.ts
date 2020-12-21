import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CarteleraI, MovieI } from '../interfaces/cartelera.interface';
import { CastI, CreditsResponseI } from '../interfaces/credits-response.interface';
import { MovieResponseI } from '../interfaces/movie-response.inteface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: environment.mdbKey,
      language: 'es-ES',
      page: this.carteleraPage.toString(),
    }
  }

  getCartelera(): Observable<MovieI[]> {
    if(this.cargando) {
      return of([]); 
    }

    this.cargando = true;

    return this.http.get<CarteleraI>(`${environment.mdbUrl}/3/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (res) => res.results),
      tap(() => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }

  buscarPeliculas(texto: string): Observable<MovieI[]> {
    const params = {
      ...this.params,
      page: '1',
      query: texto
    }

    return this.http.get<CarteleraI>(`${environment.mdbUrl}/3/search/movie`, {
      params
    }).pipe(
      map(res => res.results)
    )
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getPeliculaDetalle(id: number) {
    return this.http.get<MovieResponseI>(`${environment.mdbUrl}/3/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err => of(null))
    )
  }

  getCast(id: number): Observable<CastI[]> {
    return this.http.get<CreditsResponseI>(`${environment.mdbUrl}/3/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map(res => res.cast),
      catchError(err => of([]))
    )
  }
}
