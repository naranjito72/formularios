import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anfo1-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {
  nombreRecibido = '';
  /*nombre recibido valor que se rellene */
  passwordRecibida = '';
  /*igual que antes pero password */
  /*Declaramos placeholder */

  placeholder = {
    username: 'teclea tu nombre',
    userpass: 'teclea tu password'
  };
  constructor() { }
/*Declaración función recibir datos ¿porqué fuera llaves?*/
recibirDatos( nombre, password ) {
  this.nombreRecibido = nombre.value;
  this.passwordRecibida = password.values;
}
  ngOnInit() {
  }

}
