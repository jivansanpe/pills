import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      title: 'Estás seguro!',
      text: 'quieres salir de la autentificación',
      icon: 'error',
      confirmButtonText: ' Confirmar'
    }).then(respuesta => {
      if (localStorage.getItem('personalToken')) {
        localStorage.removeItem('personalToken');
      }
      window.location.reload();
    })
  }

}
