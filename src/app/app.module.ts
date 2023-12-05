import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContenedorBaseComponent } from './contenedor-base/contenedor-base.component';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ContenedorBaseComponent,
    HeaderPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
