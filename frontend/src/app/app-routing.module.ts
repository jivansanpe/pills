import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { InvitadoComponent } from './views/invitado/invitado.component';
import { CrearCuentaComponent } from './views/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './views/iniciar-sesion/iniciar-sesion.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { PerfilComponent } from './views/perfil/perfil.component';

const routes: Routes = [
  { path: 'iniciarSesion', component: IniciarSesionComponent},
  { path: 'crearCuenta', component: CrearCuentaComponent},
  { path: 'invitado', component: InvitadoComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'list', component: ListComponent },
  { path: 'us', component: AboutUsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }

