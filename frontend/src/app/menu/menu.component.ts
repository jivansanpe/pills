import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public miToken: number;
  public userName: string | null;
  constructor() {
    this.miToken = 0;
    this.userName = "";
  }
  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }
  public logout(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres salir de la autentificación?',
      icon: 'error',
      timer: 3000,
      confirmButtonText: 'CONFIRMAR',
      cancelButtonText: 'Cancelar. No salir.',
      showCancelButton: true,
      showCloseButton: true,
      preConfirm: (login) => {

      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        if (localStorage.getItem('personalToken')) {
          localStorage.removeItem('personalToken');
        }
        window.location.reload();
        Swal.fire('Proceso terminado. Logout OK')
        Swal.fire('Cliente ha sido creado')
      }
    })

  }
}
