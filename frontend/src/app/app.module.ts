import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './views/list/list.component';
import { EntreeComponent } from './views/list/entree/entree.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { LoadScriptsService } from './shared/services/load-scripts.service';
import { AlertaComponent } from './alerta/alerta.component';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { InvitadoComponent } from './views/invitado/invitado.component';
import { CrearCuentaComponent } from './views/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './views/iniciar-sesion/iniciar-sesion.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { AcercaDeComponent } from './views/acerca-de/acerca-de.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { EnviadoComponent } from './views/enviado/enviado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    EntreeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    LoginComponent,
    AlertaComponent,
    BienvenidaComponent,
    InvitadoComponent,
    CrearCuentaComponent,
    IniciarSesionComponent,
    UsuarioComponent,
    PerfilComponent,
    AcercaDeComponent,
    ContactoComponent,
    EnviadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoadScriptsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
