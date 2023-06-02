import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { AlertServiceService } from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'proyecto1ng';


  //ESTO ES PARA TRAER LOS DATOS DE LA API, PUEDEN PASARLO A ALGUNA NUEVA PAGE EN DONDE SE MUESTREN LOS DATOS DE ESTOS PERSONAJES
  personajes: any[] = [];

  constructor(private apiService: ApiService,
    private alertService: AlertServiceService) { }

  llenarData() {
    this.apiService.getPersonajes().subscribe(res => {
      this.personajes = res.results;
      console.log(this.personajes);
    });
  }

  ngOnInit(): void {
    this.llenarData();
  }

  //mandar a llamar el service y la creacion del metodo y se manda a llamar el metodo global
  trigger(message:string, action:string){
    this.alertService.openSnackBar(message, action);
   }
}



