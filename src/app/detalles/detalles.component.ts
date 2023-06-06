import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
personaje!:Observable<any>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.personaje = this.apiService.getPersonajePorId(1);
  }
}
