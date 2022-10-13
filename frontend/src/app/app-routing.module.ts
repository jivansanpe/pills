import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { InvitadoComponent } from './views/invitado/invitado.component';
import { CrearCuentaComponent } from './views/crear-cuenta/crear-cuenta.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { AcercaDeComponent } from './views/acerca-de/acerca-de.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { EnviadoComponent } from './views/enviado/enviado.component';

const routes: Routes = [
  { path: 'crearCuenta', component: CrearCuentaComponent},
  { path: 'invitado', component: InvitadoComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'acerca', component: AcercaDeComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'enviado', component: EnviadoComponent},
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }

