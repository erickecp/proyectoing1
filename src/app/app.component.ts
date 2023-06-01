import { Component } from '@angular/core';
import { AlertServiceService } from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'proyecto1ng';

  constructor(private alertService: AlertServiceService){}

  //mandar a llamar el service y la creacion del metodo y se manda a llamar el metodo global
  trigger(message:string, action:string){
    this.alertService.openSnackBar(message, action);
   }
}



