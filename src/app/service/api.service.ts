import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  urlApi = 'https://rickandmortyapi.com/api/character';
 
  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  BusquedaPorNombre(name: string): Observable<any> {
    const searchUrl = `${this.urlApi}?name=${name}`;
    return this.http.get<any>(searchUrl);
  }

  getPersonajePorId(id: number): Observable<any> {
    const characterUrl = `${this.urlApi}/${id}`;
    return this.http.get<any>(characterUrl);
  }

  busquedaPorEspecies(species: string): Observable<any> {
    const searchUrl = `${this.urlApi}?species=${species}`;
    return this.http.get<any>(searchUrl);
  }
}
