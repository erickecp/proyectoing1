import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
//importar las posiciones
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {
  //posiciones en donde se encuentra el alert, centrado='center','end', 'left', 'right'(horizontal), 'top'=arriba (vertical)
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
//libreria de angularmaterial
  constructor(private snackBar: MatSnackBar) { }
//creacion del metodo del alert (global)
//2 parametros mensaje= 'mensaje que aparecera en el alert', action='cancelar' 'aceptar'
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      //  duration: 2000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
    });
  }
}
