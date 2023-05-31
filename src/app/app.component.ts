import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1ng';


  //ESTO ES PARA TRAER LOS DATOS DE LA API, PUEDEN PASARLO A ALGUNA NUEVA PAGE EN DONDE SE MUESTREN LOS DATOS DE ESTOS PERSONAJES
  personajes: any[] = [];

  constructor(private apiService: ApiService) { }

  llenarData() {
    this.apiService.getPersonajes().subscribe(res => {
      this.personajes = res.results;
      console.log(this.personajes);
    });
  }

  ngOnInit(): void {
    this.llenarData();
  }
}
